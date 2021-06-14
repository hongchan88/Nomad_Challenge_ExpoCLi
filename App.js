import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from 'expo-asset';


export default function App() {

  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font]
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    const ImagesToLoad = [require("./assets/logo.jpg"),
      "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"]

    const ImagePromises = ImagesToLoad.map(image => {
      Asset.loadAsync(image)
    });
    return Promise.all([...fontPromises, ...ImagePromises])
  }


  if (loading) {
    return <AppLoading
      onError={console.warm}
      onFinish={onFinish}
      startAsync={preload} />;
  }
  return (
    <View style={styles.container}>
      <Text>lets talk  Hello
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
