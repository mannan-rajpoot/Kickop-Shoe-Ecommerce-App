import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
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

      <View style={styles.shoeCard}>
        <Image
          style={styles.shoeImage}
          source={require("../assets/shoe1.png")}
        />
        <View style={styles.shoeInfo}>
          <Text style={styles.shoeName}>Nike Air Max 270</Text>
          <Text style={styles.shoeCategory}>Men's Shoes</Text>

          <View style={styles.priceRow}>
            <Text style={styles.shoePrice}>$129.99</Text>

            <Pressable style={styles.addButton}>
              <Ionicons name="add" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
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
    fontSize: 30,
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
  bannerSection: {
    marginHorizontal: 20,
    marginTop: 12,
    height: 180,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 12,
    backgroundColor: "#e2e2e2",
  },
  bannerContent: {
    paddingHorizontal: 5,
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  bannerImage: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
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
  shoeCard: {
    width: 170,
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 12,
  },

  shoeImage: {
    width: "100%",
    height: 140,
    resizeMode: "contain",
  },

  shoeInfo: {
    marginTop: 8,
  },

  shoeBrand: {
    fontSize: 13,
    color: "#777",
  },

  shoeName: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 3,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  shoePrice: {
    fontSize: 17,
    fontWeight: "700",
  },

  addButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
