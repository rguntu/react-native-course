

import { useAuth } from "@/lib/auth-context";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";


export default function AuthScreen() {
    const [isSignup, setIsSignup] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const theme = useTheme();
    const {signUp, signIn} = useAuth();   
    const handleAuth = () => {
        // Handle authentication logic here
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }
        setError(null);
        if (isSignup) {
            signUp(email, password)
                .then((err) => {
                    if (err) {
                        setError(err);
                    }
                });
        } else {
            signIn(email, password)
                .then((err) => {
                    if (err) {
                        setError(err);
                    }
                });
        }   
        router.replace("/");
    };
    const handleSwitchMode = () => {
        setIsSignup((prev) => !prev);
    };
    return (
        <KeyboardAvoidingView 
            behavior={"padding"}
            style={styles.container}
            >
            <View style={styles.content}>
                
                <Text style={styles.title}>
                    {isSignup ? "Create Account" : "Sign In"}
                </Text>
                <Text>Create Account</Text>
                <TextInput 
                style={styles.input} 
                label="Email" 
                autoCapitalize="none"
                placeholder="example@gmail.com"
                onChangeText={setEmail}
                mode="outlined"/>

                 <TextInput label="Password" 
                autoCapitalize="none"
                onChangeText={setPassword}
                 style={styles.input} 
                mode="outlined"/>
                {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
                <Button style={styles.button} mode="contained" onPress={handleAuth}> {isSignup ? "Sign-Up" : "Sign-in"}</Button>
                <Button style={styles.switchButton} mode="text" onPress={handleSwitchMode}> {isSignup ? "Already have account? Sign-In" : "Sign-Up" } </Button>
            </View>
            </KeyboardAvoidingView>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    content: {
        width: "100%",
        maxWidth: 400,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        marginBottom: 10,
    },
    button: {
        width: "100%",
        marginTop: 10,
    },
    switchButton: {
        marginTop: 10,
        alignSelf: "center",
    },
}); 