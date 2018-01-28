import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, TouchableWithoutFeedback, Image, ScrollView} from 'react-native';
import * as firebase from 'firebase'
import Bird from './Bird'

import {getAllBirds} from '../../actions/encyclopedia';
import {setSelectedBird} from '../../actions/encyclopedia';
 
class Encyclopedia extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.encyclopedia.isLoading = true
        console.log(this.props)
        this.props.getAllBirds()
    }

    selectedBird(bird) {
        this.props.setSelectedBird(bird)
    }


    renderBird(singleBird) {
        return(
            <View>
                <TouchableWithoutFeedback 
                    onPress={() => {
                        this.selectedBird(singleBird.item)
                    }}>
                    <View>
                        <Text>{singleBird.item.common_name}</Text>
                        <Image 
                            style={{width: 100, height: 100}}
                            source={{uri: typeof singleBird.item.pictures != false ? singleBird.item.pictures[0] : ''}} 
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render() {
        if(this.props.encyclopedia.isLoading) {
            return (
                <Text>Loading</Text>
            )
        }
        return(
            <ScrollView>
                <FlatList 
                    data={this.props.encyclopedia.birds}
                    renderItem={this.renderBird.bind(this)}
                    keyExtractor={(bird, index) => index}
                    />
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {getAllBirds, setSelectedBird})(Encyclopedia);
