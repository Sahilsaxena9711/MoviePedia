import { createStackNavigator, createAppContainer } from "react-navigation";
import Fetch from './container/fetch';
import Movie from './container/movie';

const Route = createStackNavigator({
    Fetch: {
        screen: Fetch
    },
    Movie: {
        screen: Movie
    }
},
    {
        initialRouteName: "Fetch"
    }
);

export default createAppContainer(Route);
