import React from 'react'; 
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal = 20,
        paddingVertical = 15,
    },
    text: {

    }
});

export default () => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>Themes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native Basics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native by Example</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};