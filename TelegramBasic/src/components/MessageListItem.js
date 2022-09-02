import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

//değerleri prop olarak alıyoruz
const MessageListItem = ({avatar,name,message}) => {
    return (
            <View style={styles.contact}>
                <View style={styles.contactAvatar}>
                    <Image style={styles.avatar} source={avatar} />
                </View>
                <View style={styles.contactContent}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
            </View>
    );
}

export default MessageListItem;

const styles = StyleSheet.create({

    contact: {
        width: "100%",
        height: 50,
        flexDirection: "row",

    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginLeft: 10,
        textAlign: "left",


    },
    contactContent: {
        width:"80%",
        flexDirection: "column",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        paddingVertical:5
    },
    contactAvatar:{
        width:"20%",
        paddingVertical:5
    },
    name: {
        width: "100%",
        height:"50%",
        color: "black",
        fontSize: 16,
    },
    message: {
        width: "100%",
        height: "50%",
        color:"black",
        fontSize:14
    },
})

