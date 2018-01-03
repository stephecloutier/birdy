import React from 'react';
import {View, Text, Button} from 'react-native';

const Header = (props) => {
    return(
        <View>
            <Text>
                {props.headerText}
            </Text>
        </View>
    )
}

//export {Header};
export default Header;

/*
<Button
                title='Encyclopédie'
                onPress={console.log('lien vers l\'encyclopédie')}>
            </Button>
            */