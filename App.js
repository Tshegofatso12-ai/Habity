import { StatusBar } from "expo-status-bar";
import React,{useEffect,useState} from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./src/MainStackNavigation/routing/AppNavigator";


export default function App()
{
  return (
      <PaperProvider>
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <AppNavigator></AppNavigator>
          {/* <FlashMessage position="top"/> */}
        </View>
      </PaperProvider>
  );
}
