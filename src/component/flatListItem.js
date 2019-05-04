import React from 'react';
import { View, Image, Text } from 'react-native';

export default class FlatListItem extends React.Component {
    render() {
        return (
            <View id={this.props.item.imdbID} style={{borderBottomWidth: 1, borderBottomColor: 'grey',flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: 'black', flexDirection: 'row' }}>
                    <Image
                        source={{ uri: this.props.item.Poster == "N/A" ? "https://facebook.github.io/react/logo-og.png" : this.props.item.Poster }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    >
                    </Image>
                    <View style={{ flex: 1, flexDirection: 'column', height: 50, marginTop: 25 }}>
                        <Text style={{fontSize: 15, color: 'floralwhite', fontWeight: 'bold'}}>
                            {this.props.item.Title}
                        </Text>
                        <Text style={{fontSize: 15, color: 'floralwhite'}}>
                            {this.props.item.Year}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}