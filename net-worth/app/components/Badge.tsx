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
        backgroundColor: '#CCFF40', // Green with 20% opacity
        borderRadius: 24,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignSelf: 'flex-start',
    },
    text: {
        color: 'black',
        fontWeight: '600',
        fontSize: 12
    },
});

export default Badge;