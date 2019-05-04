import React from 'react';
import { fetchProducts } from '../redux/action/index';
import { View, ScrollView, TextInput, Dimensions, Alert, TouchableHighlight, Text, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import FlatListItem from '../component/flatListItem';
class Fetch extends React.Component {
    static navigationOptions = {
        title: 'Search Movie',
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
            products: [],
            search: "",
            loader: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.products.products.success) {
            if(nextProps.products.products.data.products.Response == "False"){
                Alert.alert(
                    'No Movies Found',
                    `No Movies found with ${this.state.search}`,
                    [
                      
                      {text: 'OK'},
                    ],
                    {cancelable: false},
                  );
            }
            this.setState({
                products: nextProps.products.products.data.products.Response == "True" ? nextProps.products.products.data.products.Search : [],
                loader: false
            })
        } else if (nextProps.products.products.loading) {
            this.setState({
                loader: true
            })
        } else if(nextProps.products.products.error){
            this.setState({loader: false})
            Alert.alert(
                'Error',
                `${nextProps.products.products.message}`,
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
              );
        }
    }

    findMovie() {
        if (!this.state.search.trim())return
        else {
            this.props.dispatch(fetchProducts(this.state.search))
        }
    }

    openMovie(item){
        this.props.navigation.navigate('Movie', { 'id': 2 })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flexDirection: 'row', padding: 1, borderColor: 'dimgrey' }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <TextInput value={this.state.search} placeholder="Search Movie Title" style={{ height: 45, borderRadius: 2, width: (Dimensions.get('window').width * 70) / 100, margin: 5, padding: 4, backgroundColor: "ghostwhite" }} onChangeText={(search) => this.setState({ search })} />
                    </TouchableWithoutFeedback>
                    <TouchableHighlight style={{ backgroundColor: 'dimgrey', margin: 5, height: 45, borderRadius: 4, width: (Dimensions.get('window').width * 25) / 100 }} onPress={() => this.findMovie()}>
                        <View style={{ textAlign: 'center', alignContent: "center" }}>
                            <Text style={{ textAlign: 'center', color: 'azure', marginTop: 8, fontSize: 18 }} >Search</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.loader ? <ActivityIndicator size="large" color="goldenrod" style={{ justifyContent: 'center' }} /> : null}
                <ScrollView>
                    {this.state.products.length == 0 ? null :
                        this.state.products.map((item, index) => (
                            <TouchableHighlight key={item.imdbID} onPress={() => this.props.navigation.navigate("Movie", {id: item.imdbID, title: item.Title})}>
                                <FlatListItem  item={item} key={index} />
                            </TouchableHighlight>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(Fetch);