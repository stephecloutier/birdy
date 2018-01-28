import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Image} from 'react-native';
import * as firebase from 'firebase'

class Bird extends Component {
    render() {
        const {common_name, description, habitats, family, distribution, latin_name, min_size, max_size, pictures} = this.props.encyclopedia.currentBird
        return (
            <View>
                <View>
                    <Text>Nom commun</Text>
                    <Text>{common_name}</Text>
                </View>
                <View>
                    <Text>Description</Text>
                    <Text>{description}</Text>
                </View>
                <View>
                    <Text>Habitat(s)</Text>
                    <FlatList 
                        data={habitats}
                        renderItem={(singleHabitat) => {
                            return (
                                <Text>
                                    {singleHabitat.item}
                                </Text> 
                            )
                        }}
                        keyExtractor={(habitat, index) => index}
                    />
                </View>
                <View>
                    <Text>Famille</Text>
                    <Text>{family}</Text>
                </View>
                <View>
                    <Text>Distribution</Text>
                    <FlatList 
                        data={distribution}
                        renderItem={(singleDistribution) => {
                            return (
                                <View>
                                    <Text>Latitude</Text>
                                    <Text>
                                        {singleDistribution.item.lat}
                                    </Text> 

                                    <Text>Longitude</Text>
                                    <Text>
                                        {singleDistribution.item.lng}
                                    </Text> 
                                </View>
                            )
                        }}
                        keyExtractor={(distribution, index) => index}
                    />
                </View>
                <View>
                    <Text>Nom latin</Text>
                    <Text>{latin_name}</Text>
                </View>
                <View>
                    <Text>Taille minimum</Text>
                    <Text>{min_size}cm</Text>
                </View>
                <View>
                    <Text>Taille maximum</Text>
                    <Text>{max_size}cm</Text>
                </View>
                <View>
                    <Text>Images</Text>
                    <FlatList 
                        data={pictures}
                        renderItem={(singlePicture) => {
                            return (
                                <View>
                                    <Image
                                        style={{width: 100, height: 100}}
                                        source={{uri: singlePicture.item }} 
                                    />
                                </View>
                            )
                        }}
                        keyExtractor={(picture, index) => index}
                    />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Bird);