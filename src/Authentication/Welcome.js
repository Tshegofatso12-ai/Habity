import React,{useEffect,useState,useContext} from "react";
import { View, Text, Dimensions, Image, TouchableOpacity,ActivityIndicator,TouchableHighlight } from "react-native";
import { Title } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Welcome({ navigation })
{
  const [isLoading, setisLoading] = useState(true);

  return (
      <View style={{flex: 1,backgroundColor: "#fff",alignItems: "center",justifyContent: "center"}}>
      <View
      style = {{
        borderRadius: Math.round(width +height) / 2,
        width: width * 0.6,
        height: width * 0.6,
        backgroundColor:"#E5E5E5",
        opacity:0.4,
        left:-60,
        top:-150

      }}
      underlayColor = '#ccc'
    >
    </View>
    <View
      style = {{
        borderRadius: Math.round(width +height) / 2,
        width: width * 0.6,
        height: width * 0.6,
        backgroundColor:"#04DF00",
        opacity:0.3,
        left:-160,
        top:-350,
        zIndex:999
      }}
      underlayColor = '#ccc'
    >
    </View>
              <Image
              style={{height: 300,width: 300,marginTop:-300}}
          source={require("../Assests/welcome.png")}
        />
        <Title style={{fontSize: 14,color: "black"}}>Keep Your Life On Track With Habitly</Title>
        <Text style={{margin:30,color:"#000",opacity:0.8,textAlign:"center",alignSelf:"center",alignContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci magna elit congue elit, consequat luctus semper arcu vitae. Aliquet odio maecenas nunc et rhoncus. Id eget ornare malesuada neque vel at libero. Sit sit aliquam commodo sed sodales quam quis.</Text>
        <TouchableOpacity style={{width:"80%",height:60,backgroundColor:"#04DF00",opacity:0.4,borderRadius:20,alignItems: "center",justifyContent:"center",}} 
        onPress={()=>navigation.navigate('Login')}
        >
          <Text style={{ textAlign: "center",color: "#fff", alignSelf:"center",fontSize:18, fontWeight:"bold"}}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}
