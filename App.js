import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreenWithReducer from "./src/screens/CounterScreenWithReducer";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenWithReducer from "./src/screens/SquareScreenWithReducer";
import TextInputScreen from "./src/screens/TextInputScreen";
import BoxScreen from "./src/screens/BoxScreen";
import BoxScreen2 from "./src/screens/BoxScreen2";
import AnimateScreen from "./src/screens/AnimateScreen";
import ComplexAnimateScreen from "./src/screens/ComplexAnimateScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Counter2: CounterScreenWithReducer,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: SquareScreenWithReducer,
    TextBox: TextInputScreen,
    BoxObjectModel: BoxScreen,
    BoxObjectModel2: BoxScreen2,
    Animater: AnimateScreen,
    ComplexAnimater: ComplexAnimateScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App DUMMY",
    },
  }
);

export default createAppContainer(navigator);
