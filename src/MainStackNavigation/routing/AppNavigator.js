import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../../Authentication/Welcome";
import Register from "../../Authentication/Register";
import Login from "../../Authentication/Login";

navigationOptions = ({ navigation }) => ({
  header: null,
});
const AppNavigator = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: {
      screen: createStackNavigator({
        Login: {
          screen: Login,

          navigationOptions: {
            header: null,
          },
        },
        Register: {
          screen: Register,
          navigationOptions: {
            header: null,
          },
        },
    //   ResetPassword: {
    //       screen: ResetPassword,
    //       navigationOptions: {
    //           header: null,
    //       }
    //     },
      }),
    },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: true,
    },
  }
);

export default createAppContainer(AppNavigator);
