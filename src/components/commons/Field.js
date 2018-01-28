import React, {Component} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const Field = ({label,value,onChangeText,placeholder,secureTextEntry,defaultValue}) => {
    return(
        <View style={styles.form}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                style={styles.input}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        alignSelf: 'stretch'
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: 'bold'
    },
    input: {
      alignSelf: 'stretch',
      padding: 5,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#F2F2F2'
    },
    
  });
  

export default Field;
