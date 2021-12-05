import React from "react";
import { View, Text, Dimensions, Animated,Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ItemBox(props) {
  const leftSwipe = (progress, dragX) => {
  
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <>
       <Pressable  onPress={props.handelDelete} >
        <View
          style={{
            flex:1,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            
          }}
        >
          <Animated.Text
            style={{
              fontSize: 15,
              color: "white",
              transform: [{ scale: scale }],
            
            }}
          >
            Remove
          </Animated.Text>
        </View>
      </Pressable>
      </>
     
    );
  };
  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View
        style={{
          height: 65,
          width: "100%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "red" }}>MY name is {props.data.name}</Text>
      </View>
    </Swipeable>
  );
}
