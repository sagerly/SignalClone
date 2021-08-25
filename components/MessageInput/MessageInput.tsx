import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather, SimpleLineIcons, MaterialCommunityIcons, AntDesign, Ionicons, } from '@expo/vector-icons';

const MessageInput = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn("sending: ", message);

        setMessage('');
    }

    const onPlusclicked = () => {
        console.warn("on plus clicked");
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusclicked();
        }
    }

    return (
        <KeyboardAvoidingView style={styles.root} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={100}>
            <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="black" style={styles.icon} />
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={(newMessage) => setMessage(newMessage)}
                placeholder="Message..."
            />
            <Feather name="camera" size={24} color="black" style={styles.icon} />
            <MaterialCommunityIcons name="microphone-outline" size={24} color="black" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
            {message ? <Ionicons name="send" size={15} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    root: {
        flexDirection: 'row',
        padding: 10,
    },

    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },

    input: {
        flex: 1,
        marginHorizontal: 5,
    },

    icon: {
        marginHorizontal: 5,
    },

    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 35,
},

})

export default MessageInput;