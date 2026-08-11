import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Pressable,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Screen Dimensions
const { width, height } = Dimensions.get("window");

// Scaling helper (standardized to iPhone 11/13 width)
const scale = (size) => (width / 375) * size;

export default function App({navigation}) {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" color={"black"} size={scale(24)} />
            </Pressable>
          </View>

          {/* Brand Identity */}
          <View style={styles.brandSection}>
            <Text style={styles.brandName}>Kickop</Text>
            <Text style={styles.brandTagLine}>Every Brand. Every Step</Text>
          </View>

          {/* Title Section */}
          <View style={styles.authTitleSection}>
            <Text style={styles.authTitle}>Welcome Back</Text>
            <Text style={styles.authSubTitle}>Login to continue your journey</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" color={"#111111"} size={scale(20)} />
              <TextInput
                style={styles.inputText}
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" color={"#111111"} size={scale(20)} />
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={hidePassword}
              />
              <Pressable onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons
                  name={hidePassword ? "eye-off-outline" : "eye-outline"}
                  size={scale(20)}
                  color="#555"
                />
              </Pressable>
            </View>

            <View style={styles.forgetButtonContainer}>
              <Pressable>
                <Text style={styles.forgetText}>Forget Password?</Text>
              </Pressable>
            </View>
          </View>

          {/* Login Button Section */}
          <View style={styles.loginButtonSection}>
            <Pressable style={styles.loginButton}>
              <View style={styles.loginButtonContent}>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.iconAbsolute}>
                   <Ionicons name="arrow-forward" color={"white"} size={scale(20)} />
                </View>
              </View>
            </Pressable>
          </View>

          {/* Social Login Section */}
          <View style={styles.socialLoginSection}>
            <View style={styles.dividerSection}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <Pressable style={styles.googleButton}>
              <Ionicons name="logo-google" size={scale(24)} color="black" />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </Pressable>
          </View>

          {/* Footer Section - Create Account Link */}
          <View style={styles.footerSection}>
             <Text style={styles.footerText}>
               Don't have an account?{' '}
               <Text 
                style={styles.signUpLink} 
                onPress={() => console.log("Navigate to SignUp")}
               >
                 Create Account
               </Text>
             </Text>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1, 
    paddingBottom: scale(30),
  },
  headerSection: {
    paddingHorizontal: width * 0.05,
    marginTop: scale(10),
  },
  backButton: {
    backgroundColor: "white",
    width: scale(45),
    height: scale(45),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    elevation: 4, // Android shadow
    shadowColor: "black", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  brandSection: {
    marginTop: height * 0.04,
    paddingHorizontal: width * 0.05,
  },
  brandName: {
    fontSize: scale(36),
    fontWeight: "bold",
    color: "#000",
  },
  brandTagLine: {
    fontSize: scale(16),
    color: "#555555",
    marginTop: 4,
  },
  authTitleSection: {
    marginTop: height * 0.04,
    paddingHorizontal: width * 0.05,
  },
  authTitle: {
    fontSize: scale(22),
    fontWeight: "bold",
  },
  authSubTitle: {
    fontSize: scale(14),
    color: "#777",
    marginTop: 4,
  },
  formSection: {
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.03,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    paddingHorizontal: 15,
    height: scale(58),
    alignItems: "center",
    marginBottom: 15,
  },
  inputText: {
    flex: 1,
    fontSize: scale(15),
    marginLeft: 10,
    color: "#000",
  },
  forgetButtonContainer: {
    alignItems: "flex-end",
  },
  forgetText: {
    fontWeight: "600",
    fontSize: scale(13),
  },
  loginButtonSection: {
    marginTop: height * 0.03,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "black",
    width: "90%",
    borderRadius: 18,
    height: scale(58),
    justifyContent: "center",
  },
  loginButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontSize: scale(17),
    fontWeight: "700",
  },
  iconAbsolute: {
    position: 'absolute',
    right: 20,
  },
  socialLoginSection: {
    marginTop: height * 0.03,
  },
  dividerSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.1,
    marginBottom: scale(20),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEE",
  },
  dividerText: {
    fontSize: scale(13),
    color: "#AAA",
    marginHorizontal: 15,
    fontWeight: "600",
  },
  googleButton: {
    width: "90%",
    alignSelf: "center",
    height: scale(58),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 18,
  },
  googleButtonText: {
    fontSize: scale(15),
    fontWeight: "600",
    color: "#111",
    marginLeft: 12,
  },
  footerSection: {
    marginTop: scale(30),
    alignItems: 'center',
    paddingBottom: scale(20),
  },
  footerText: {
    fontSize: scale(14),
    color: '#666',
  },
  signUpLink: {
    color: 'black',
    fontWeight: 'bold',

  },
});