import React from 'react';
import {View, Text, Button} from 'react-native';

const Header = (props) => {
    return(
        <View>
            <Text>
                {props.headerText}
            </Text>
            <Button
                title='Encyclopédie'>
            </Button>
        </View>
    )
}

export {Header};
