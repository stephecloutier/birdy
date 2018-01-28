import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

const Field = ({label,value,onChangeText,placeholder,secureTextEntry,defaultValue}) => {
    return(
        <View>
            <Text>{label}</Text>

            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
                />
        </View>
    )
}

export default Field;
