import React from 'react';
import { fetchMovie } from '../redux/action/index';
import { View, Text, ActivityIndicator, Image, Dimensions, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';

class Movie extends React.Component {
    static navigationOptions = {
        title: 'About',
        headerStyle: {
            backgroundColor: 'dimgrey',
          },
          headerTintColor: 'azure',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            data: {}
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchMovie(this.props.navigation.state.params.id))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.products.movie.success) {
            this.setState({
                loader: false,
                data: nextProps.products.movie.data.movie
            })
        }else if(nextProps.products.movie.error){
            this.setState({
                loader: false
            })
            Alert.alert(
                'Error',
                `Error while fetching movies check your internet connection.`,
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
              );
        }
    }

    render() {
        return (
            <ScrollView style={{   flex: 1, flexDirection: 'column',  backgroundColor: 'black'}}>
                {this.state.loader ? <ActivityIndicator size="large" color="goldenrod" style={{ justifyContent: 'center' }} /> :
                   this.state.data == {} ? null : <View>
                        <View>
                            <Image source={{ uri: this.state.data.Poster == "N/A" ? "https://facebook.github.io/react/logo-og.png" : this.state.data.Poster }}
                                style={{ borderRadius: 8, marginLeft: (Dimensions.get('window').width * 15) / 100 ,width: (Dimensions.get('window').width * 70) / 100, height: 280, margin: 5 }}>
                            </Image>
                        </View>
                        <View style={{margin: 15}}>
                            <Text style={{color: 'white', marginTop: 8, fontSize: 20 }}>
                                Title : {this.state.data.Title}
                            </Text>
                            <Text style={{color: 'white' , marginTop: 8, fontSize: 20}}>
                                Relese Date : {this.state.data.Released}
                            </Text>
                            <Text style={{color: 'white' , marginTop: 8, fontSize: 20}}>
                                Rating : {this.state.data.imdbRating}
                            </Text>
                            <Text style={{color: 'white', marginTop: 8, fontSize: 20 }}>
                                Star Cast : {this.state.data.Actors}
                            </Text>
                            <Text style={{color: 'white', marginTop: 8, fontSize: 20 }}>
                                Story Plot : {this.state.data.Plot}
                            </Text>
                        </View>
                    </View>}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Movie);