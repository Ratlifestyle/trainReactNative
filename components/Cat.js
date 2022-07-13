import { React, useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native-web";
import Dog from "./Dog";
import reactDom from "react-dom";

function Cat({ route, navigation }){

    let { catName }  = route.params;
    useEffect(()=>{
        console.log("caca")
    })

    const [isHungry, setIsHungry] = useState(true);
    return (
        <View>
            <Text>Im a cat and my name is {JSON.stringify(catName)} </Text>
            <TouchableOpacity onLongPress={()=>{
                navigation.setParams({
                    catName: "Rubert"
                })
                console.log("aaaa")
            }}
            onPress={()=>{
                console.log("bbbb")
                setIsHungry(false)
            }}>
                <View style={styles.buttonStyle}>
                    <Text>{isHungry ? "I am hungry" : "I am full"}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        flex: 1,
        backgroundColor: "#3A9BFA",
        alignItems: "center",
    }
})

export default Cat;