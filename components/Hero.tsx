import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Hero = () => {
  return (
    <View style={styles.hero}>
        <Text style={styles.title}>Halo, user!</Text>
        <Text style={{ width: 250 }}>We hope you can find what you came for</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    hero: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    title: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        paddingVertical: 10,
    }
});

export default Hero