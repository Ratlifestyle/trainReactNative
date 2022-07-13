import React from "react";
import { View, Text, Button } from "react-native-web";
import Cat from "./Cat";

function Dog(){
    return (
        <View>
            <Text>Im a dog</Text>
            <Button onPress={()=>{
                <Cat />
            }}title="press me to get a cat">
            </Button>
        </View>
    )
}

export default Dog;