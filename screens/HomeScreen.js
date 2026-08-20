import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Dimensions, // Added for responsiveness
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Get the screen width
const { width } = Dimensions.get("window");

// Calculate card width: (Screen Width - margins - gap) / 2
const cardWidth = (width - 40 - 8) / 2;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={styles.headerSection}>
        <Text style={styles.appName}>Kickop</Text>
        <Pressable>
          <Ionicons name="notifications-outline" size={28} />
        </Pressable>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} />

        <TextInput
          style={styles.searchInput}
          placeholder="Search shoes, brands ..."
        />
        <Pressable>
          <Ionicons name="options-outline" size={25} />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.bannerSection}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerLable}>Nike</Text>

            <Text style={styles.bannerTitle}>AIR MAX{"\n"}COLLECTION</Text>
            <Text style={styles.bannerDiscount}>Up to 30% Off</Text>

            <Pressable style={styles.shopButton}>
              <Text style={styles.shopText}>Shop Now</Text>
            </Pressable>
          </View>

          <Image
            source={require("../assets/banner1.png")}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.popularText}>Popular Shoes</Text>
          <View style={styles.viewAllSection}>
            <Text style={styles.viewText}>View all</Text>
            <Ionicons name="arrow-forward" size={15} />
          </View>
        </View>

        {/* Updated Row for Responsiveness */}
        <View style={styles.shoeRow}>
          <View style={styles.shoeCard}>
            <Image
              style={styles.shoeImage}
              source={require("../assets/shoe1.png")}
            />

            <View style={styles.shoeInfo}>
              <Text style={styles.shoeName} numberOfLines={1}>Nike Air Max 270</Text>
              <Text style={styles.shoeCategory}>Men's Shoes</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.shoePrice}>$129.99</Text>
              <Pressable style={styles.addButton}>
                <Ionicons name="add" size={20} color={"white"} />
              </Pressable>
            </View>
          </View>

          <View style={styles.shoeCard}>
            <Image
              style={styles.shoeImage}
              source={require("../assets/shoe2.png")}
            />

            <View style={styles.shoeInfo}>
              <Text style={styles.shoeName} numberOfLines={1}>Nike Air Max 270</Text>
              <Text style={styles.shoeCategory}>Men's Shoes</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.shoePrice}>$129.99</Text>
              <Pressable style={styles.addButton}>
                <Ionicons name="add" size={20} color={"white"} />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerSection: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
  },
  searchBar: {
    marginHorizontal: 20,
    marginTop: 12,
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 6,
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    borderColor: "#E5E5E5",
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111111",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  bannerSection: {
    marginHorizontal: 20,
    marginTop: 12,
    height: 180,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 15,
    backgroundColor: "#e2e2e2",
  },
  bannerContent: {
    flex: 1, // Added to allow text to take remaining space
    justifyContent: "center",
    marginVertical: 5,
  },
  bannerImage: {
    width: width * 0.35, // Responsive width (35% of screen)
    height: 160,
    resizeMode: "contain",
  },
  bannerLable: {
    fontSize: 20,
    fontWeight: "600",
  },
  bannerTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  bannerDiscount: {
    marginTop: 12,
    color: "#585757",
  },
  shopButton: {
    marginTop: 8,
    backgroundColor: "black",
    width: 110,
    paddingVertical: 10,
    borderRadius: 14,
  },
  shopText: {
    color: "white",
    textAlign: "center",
  },
  popularSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  popularText: {
    fontSize: 18,
    fontWeight: "700",
  },
  viewAllSection: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  viewText: {
    fontSize: 13,
    fontWeight: "600",
  },
  shoeRow: {
    flexDirection: "row",
    paddingHorizontal: 20, // Uses padding instead of margin for better alignment
    justifyContent: "space-between", // Pushes cards to edges
    marginTop: 12,
  },
  shoeCard: {
    width: cardWidth, // Dynamically calculated width
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    padding: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 4,
  },
  shoeImage: {
    width: "100%", // Takes full width of the responsive card
    height: 120,
    resizeMode: "contain",
  },
  shoeInfo: {
    marginTop: 4,
    gap: 4,
  },
  shoeName: {
    fontSize: 15,
    fontWeight: "700",
  },
  shoeCategory: {
    fontSize: 12,
    color: "gray",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  shoePrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "black",
    borderRadius: 20,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});