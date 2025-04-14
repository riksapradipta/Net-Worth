import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
    text: string;
    type: 'default' | 'primary' | 'secondary' | 'tertiary';
  };
const Button = (props: ButtonProps) => {
    const getButtonStyle = () => {
        switch (props.type) {
            case 'primary':
                return styles.button;
            case 'secondary':
                return styles.buttonSecondary;
            default:
                return styles.button;
        }
    };

    const getTextStyle = () => {
        switch (props.type) {
            case 'primary':
                return styles.buttonTextPrimary;
            case 'secondary':
                return styles.buttonTextSecondary;
            default:
                return styles.buttonTextPrimary;
        }
    };

    return (
        <Pressable style={getButtonStyle()} onPress={() => console.log("Button Pressed")}>
            <Text style={getTextStyle()}>{props.text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonSecondary: {
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    button: {
        backgroundColor: '#AAFF00',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        alignSelf: 'flex-start', // Optional: Ensures the button aligns to the start of the parent
    },
    buttonTextPrimary: {
        color: '#000',
        fontWeight: '300',
        fontSize: 14,
    },

    buttonTextSecondary: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
    },
});


export default Button;