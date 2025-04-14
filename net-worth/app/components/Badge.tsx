import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Badge: React.FC<{ text: string }> = ({ text }) => {
    return (
        <View style={styles.badge}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        backgroundColor: 'rgb(170, 255, 0)', // Green with 20% opacity
        borderRadius: 24,
        paddingVertical: 4,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
    },
    text: {
        color: 'black',
        fontWeight: '400',
        fontSize: 14
    },
});

export default Badge;