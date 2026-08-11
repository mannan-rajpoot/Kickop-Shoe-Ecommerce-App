import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Get device width for responsive scaling
const { width } = Dimensions.get("window");

export default function OnboardingScreen({ navigation }) {
  const image = require("../assets/onboarding.png");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      {/* Top Section - Responsive Image */}
      <View style={styles.topSection}>
        <Image 
          style={styles.image} 
          source={image} 
          resizeMode="contain" 
        />
      </View>

      {/* Middle Section - Text Content */}
      <View style={styles.middleSection}>
        <Text style={styles.heading}>Every Brand. Every Step.</Text>
        <Text style={styles.description}>
          Discover premium shoes, exclusive collections and unbeatable comfort.
        </Text>
      </View>

      {/* Bottom Section - Action Button */}
      <View style={styles.bottomSection}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("SignIn")}>
          <View style={styles.buttonContent}>
            {/* Empty view to balance the icon and keep text centered */}
            <View style={{ width: 40 }} /> 
            
            <Text style={styles.buttonText}>Get Started</Text>
            
            <View style={styles.iconCircle}>
              <Ionicons
                name="arrow-forward"
                color="black"
                size={20}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    flex: 3, // Takes more space for the image
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // Scales based on screen width
    width: width * 1.4, 
    height: "100%",
    // Keeps your slight offset look without breaking layout
    right: 30, 
  },
  middleSection: {
    flex: 1, // Takes middle space
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "black",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: "#555", // Soft black/grey
    lineHeight: 22,
  },
  bottomSection: {
    flex: 1, // Takes bottom space
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    width: width * 0.85, // 85% of screen width
    height: 60,
    borderRadius: 18, // Makes it a pill shape
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  iconCircle: {
    backgroundColor: "white",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
});