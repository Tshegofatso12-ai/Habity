import React,{useEffect,useState,useContext} from "react";
import { View, Text, Dimensions, Image, TouchableOpacity,ActivityIndicator,TextInput } from "react-native";
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
        top:-280

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
        top:-480,
        zIndex:999
      }}
      underlayColor = '#ccc'
    >
    </View>
        <Title style={{fontSize: 22,color: "black",marginTop:-340}}>Welcome back to Habitly</Title>
        <TextInput
            value={""}
            style={{height: 55,width: width - 60,borderRadius: 100,backgroundColor: "rgba(233,233,233,0.8)",margin: 15,paddingLeft: 30,color: "black",}}
            placeholder="Email"
            maxLength={10}
            keyboardType="name-phone-pad"
            onChangeText={(username) => console.log(username.replace(/\s/g, ""))}
        />
        <TextInput
            value={""}
            style={{height: 55,width: width - 60,borderRadius: 100,backgroundColor: "rgba(233,233,233,0.8)",margin: 15,paddingLeft: 30,color: "black",}}
            placeholder="Password"
            maxLength={10}
            keyboardType="name-phone-pad"
            onChangeText={(username) => console.log(username.replace(/\s/g, ""))}
        />
        <TouchableOpacity style={{margin:20,width:"80%",height:60,backgroundColor:"#04DF00",opacity:0.4,borderRadius:20,alignItems: "center",justifyContent:"center",}} 
        >
          <Text style={{ textAlign: "center",color: "#fff", alignSelf:"center",fontSize:18, fontWeight:"bold"}}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate('Register')}>
        <Text style={{marginBottom:20,color:"#000",opacity:0.8,textAlign:"center",alignSelf:"center",alignContent:"center"}}>Don't have an account? <Text style={{color:"#04DF00"}}>Sign Up</Text></Text>
        </TouchableOpacity>
    </View>
  );
}
