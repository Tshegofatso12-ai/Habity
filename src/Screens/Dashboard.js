import React,{useState} from "react";
import { View, Text, Dimensions, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FloatingAction } from "react-native-floating-action";
import { Icon } from 'react-native-elements';
import CalendarStrip from 'react-native-calendar-strip';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Dashboard({ navigation })
{
  const [isLoading, setisLoading] = useState(true);
  const actions = [
    {
      text: "Add Habit",
      icon: <Icon name='checkmark-circle-sharp' type='ionicon' color='white' />,
      name: "add",
      position: 1,
      color: "rgba(4,223,0,0.5)"
    },
    {
      text: "Join Challenge",
      icon: <Icon name='ribbon-sharp' type='ionicon' color='white'/>,
      name: "join",
      position: 2,
      color: "rgba(4,223,0,0.5)"
    },
  ];

  return (
    <View style={{height:"100%"}}>
    <ScrollView style={{flex: 1,backgroundColor: "white",}}>
      <View style={{top:0,height:height*0.3, width:width, backgroundColor:"#E3E3E3",overflow:"hidden"}}>
      <View
      style = {{
        borderRadius: Math.round(width +height) / 2,
        width: width * 0.3,
        height: width * 0.3,
        backgroundColor:"#04DF00",
        opacity:0.4,
        top:-10,
        left:-10,
        zIndex:9999

      }}
      underlayColor = '#ccc'
    >
    </View>
    <View
      style = {{
        position:"absolute",
        borderRadius: Math.round(width +height) / 2,
        width: width * 0.7,
        height: width*0.7,
        backgroundColor:"#04DF00",
        opacity:0.3,
        left:230,
        top:70,
      }}
      underlayColor = '#ccc'
    >
    </View>
    </View>
    <View style={{bottom:90}}>
    <Image 
    style={{width:200,height:200, alignSelf:"center", borderRadius:100}}
    source={{uri:"https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80"}}/>
    <Text style={{textAlign:"center", fontSize:18,fontWeight:"bold", margin:20}}>Hello, Tshegofatso</Text>
    <CalendarStrip
      scrollable
      style={{height:120, paddingTop: 20, paddingBottom: 10}}
      calendarColor={'#E3E3E3'}
      calendarHeaderStyle={{color: 'black'}}
      dateNumberStyle={{color: 'black'}}
      dateNameStyle={{color: 'black'}}
      iconContainer={{flex: 0.1}}
    />
    <View style={{flexDirection:"row", backgroundColor:"#E3E3E3",borderRadius:20,width:width*0.9, height:70, alignSelf:"center", padding:20, marginTop:20}}>
        <Icon name='checkmark-circle-sharp' type='ionicon' color='rgba(4,223,0,0.5)'size={32}/>
        <Text style={{fontSize:20,marginLeft:20}}>Drink Water</Text>
    </View>
    <View style={{flexDirection:"row", backgroundColor:"#E3E3E3",borderRadius:20,width:width*0.9, height:70, alignSelf:"center", padding:20, marginTop:20}}>
        <Icon name='circle-thin' type='font-awesome' color='rgba(4,223,0,0.5)'size={32}/>
        <Text style={{fontSize:20,marginLeft:20}}>Read</Text>
    </View>
    <View style={{flexDirection:"row", backgroundColor:"#E3E3E3",borderRadius:20,width:width*0.9, height:70, alignSelf:"center", padding:20, marginTop:20}}>
        <Icon name='circle-thin' type='font-awesome' color='rgba(4,223,0,0.5)'size={32}/>
        <Text style={{fontSize:20,marginLeft:20}}>Meditate</Text>
    </View>
    <View style={{flexDirection:"row", backgroundColor:"#E3E3E3",borderRadius:20,width:width*0.9, height:70, alignSelf:"center", padding:20, marginTop:20}}>
        <Icon name='checkmark-circle-sharp' type='ionicon' color='rgba(4,223,0,0.5)'size={32}/>
        <Text style={{fontSize:20,marginLeft:20}}>Workout</Text>
    </View>
    </View>
    </ScrollView>
    <FloatingAction
        actions={actions}
        color={"rgb(4,223,0)"}
        onPressItem={name => {
        console.log(`selected button: ${name}`);
        }}
    />
    </View>
  );
}
