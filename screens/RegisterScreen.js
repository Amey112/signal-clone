import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from "react-native-elements"
import { auth } from "../firebase";




const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })
    },[navigation]);


    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://randomuser.me/api/portraits/lego/1.jpg",
            })
        }).catch(error => alert(error.message));

    };




    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{marginBottom: 50}}>
                create a Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input autoFocus placeholder="Full Name" type="text" value={name} onChangeText={(text) => setName(text)} />
                <Input placeholder="Email Address" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input secureTextEntry placeholder=" Password" type="password" value={password} onChangeText={(text) => setPassword(text)} />
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register} />
            </View>
            <Button
            containerStyle={styles.button}
                raised
                onPress={register}
                title="Register"
            />
        </KeyboardAvoidingView>
    )
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        backgroundColor:"white",
        
    },
    button:{
        width: 200,
        marginTop: 10,
    },
    inputContainer:{
        width: 300,

    }

});
