import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { KeyboardTypeOptions, TextInputProps} from 'react-native';
import { Input } from '../Input';
import { Container, Error } from './styles';

interface Props extends TextInputProps{
    control: Control;
    name: string;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions | 'default';
    error?: string;
}
export function InputForm({ control, name, placeholder, keyboardType, error, ...rest }: Props){

    return(

        <Container>
            <Controller
            control={control}
            name={name}
            render={({ field : { onChange, value}}) => (
                <Input
                    onChangeText={onChange}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    {...rest}
                />
            )}
            />
            {error && <Error>{error}</Error> }
            
        </Container>
    );

}