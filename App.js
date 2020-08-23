import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
    search: SearchScreen,
    ResultsShow: ResultsShowScreen,
}, {
    initialRouteName: 'search',
    defaultNavigationOptions:{
        title: 'Restaurant Search'
    }
});

export default createAppContainer(navigator);
