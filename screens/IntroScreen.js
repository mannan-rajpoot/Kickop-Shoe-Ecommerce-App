import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { useEffect } from "react";

export default function IntroScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Image source={require("../assets/icon.png")} style={styles.icon} />

      <Text style={styles.appName}>Kickop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 10,
  },
});
