import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { Menu, MenuItem } from "react-native-material-menu";

function MainPage({ navigation }){
    const [visible, setVisible] = useState(false)

    const showMenu = () => {setVisible(true)}
    const hideMenu = () => {setVisible(false)}

    return (
        <View style={styles.BandeauPrinc}>
            <Text style={styles.TextBP}>Instagram</Text>
            <View style={styles.MenuDroite}>
                <Menu
                    visible={visible}
                    anchor={<Text onPress={showMenu}>+</Text>}
                    onRequestClose={hideMenu}
                >
                    <MenuItem onPress={hideMenu}>Publier</MenuItem>
                    <MenuItem onPress={hideMenu}>Story</MenuItem>
                    <MenuItem onPress={hideMenu}>Reel</MenuItem>
                    <MenuItem onPress={hideMenu}>En direct</MenuItem>
                    <MenuItem onPress={()=>navigation.navigate('Cat', { catName : "Rodolph" })}>Go to Cat</MenuItem>
                </Menu>
                <TouchableOpacity>
                    <View>
                        <Text> {"<3"} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text> {"message"} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainView:{
        marginLeft: "20%",
        marginRight: "20%",
        fontFamily: "Neue Helvetica"
    }
})


export default MainPage;