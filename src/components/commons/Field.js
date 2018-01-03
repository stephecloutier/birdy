import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

const Field = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
    return(
        <View>
            <Text>{label}</Text>

            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText} />
        </View>
    )
}

//export {Field};
export default Field;
