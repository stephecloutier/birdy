import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Image, ScrollView, StyleSheet} from 'react-native';

class Bird extends Component {
    render() {
        const {common_name, description, habitats, family, distribution, latin_name, min_size, max_size, pictures} = this.props.encyclopedia.currentBird
        return (
            <ScrollView style={styles.container}>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Nom commun</Text>
                    <Text>{common_name}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Description</Text>
                    <Text>{description}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Habitat(s)</Text>
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
                <View style={styles.listItem}>
                    <Text style={styles.label}>Famille</Text>
                    <Text>{family}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Distribution</Text>
                    <FlatList 
                        data={distribution}
                        renderItem={(singleDistribution) => {
                            return (
                                <View>
                                    <Text style={styles.subLabel}>Latitude</Text>
                                    <Text>
                                        {singleDistribution.item.lat}
                                    </Text> 

                                    <Text style={styles.subLabel}>Longitude</Text>
                                    <Text>
                                        {singleDistribution.item.lng}
                                    </Text> 
                                </View>
                            )
                        }}
                        keyExtractor={(distribution, index) => index}
                    />
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Nom latin</Text>
                    <Text>{latin_name}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Taille minimum</Text>
                    <Text>{min_size}cm</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Taille maximum</Text>
                    <Text>{max_size}cm</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.label}>Images</Text>
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
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
    },
    label: {
        fontSize: 15,
        marginBottom: 3,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start'
    },
    subLabel: {
        fontStyle: 'italic'
    },
    listItem: {
        marginTop: 5,
        marginBottom: 5,
    }

});

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Bird);