import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
        <Pressable>
          <Text style={styles.editText}>Edit</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Cart Item 1 */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/shoe1.png")}
              style={styles.shoeImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.rowBetween}>
              <Text style={styles.shoeName}>Nike Air Max 270</Text>
              <Pressable>
                <Ionicons name="trash-outline" size={20} color="#666" />
              </Pressable>
            </View>
            <Text style={styles.shoeSpecs}>Size: 9 • Black</Text>
            <Text style={styles.shoePrice}>$129.99</Text>

            <View style={styles.counter}>
              <Ionicons name="remove-outline" size={18} color="black" />
              <Text style={styles.counterText}>1</Text>
              <Ionicons name="add-outline" size={18} color="black" />
            </View>
          </View>
        </View>

        {/* Cart Item 2 */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/shoe2.png")}
              style={styles.shoeImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.rowBetween}>
              <Text style={styles.shoeName}>Adidas Ultraboost 22</Text>
              <Pressable>
                <Ionicons name="trash-outline" size={20} color="#666" />
              </Pressable>
            </View>
            <Text style={styles.shoeSpecs}>Size: 9 • Black</Text>
            <Text style={styles.shoePrice}>$149.99</Text>

            <View style={styles.counter}>
              <Ionicons name="remove-outline" size={18} color="black" />
              <Text style={styles.counterText}>1</Text>
              <Ionicons name="add-outline" size={18} color="black" />
            </View>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$279.98</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={[styles.summaryValue, { color: "#666" }]}>Free</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$279.98</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-forward" size={20} color="black" />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },
  editText: {
    fontSize: 17,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 24,
    padding: 12,
    flexDirection: "row",
    marginBottom: 16,
    // Soft shadow for iOS/Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  shoeImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  shoeName: {
    fontSize: 17,
    fontWeight: "700",
    flex: 1,
  },
  shoeSpecs: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },
  shoePrice: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: 90,
    marginTop: 8,
    backgroundColor: "#fff",
  },
  counterText: {
    fontSize: 15,
    fontWeight: "600",
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  summaryLabel: {
    fontSize: 17,
    color: "#444",
  },
  summaryValue: {
    fontSize: 17,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: "700",
  },
  totalValue: {
    fontSize: 22,
    fontWeight: "700",
  },
  checkoutButton: {
    backgroundColor: "black",
    height: 65,
    borderRadius: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  checkoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
    marginLeft: 40, // Offsets the icon width to keep text centered
  },
  arrowCircle: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
