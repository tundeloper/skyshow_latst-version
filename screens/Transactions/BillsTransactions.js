import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScreenTitles } from "../../styles/styles"; // Assuming you have styles defined for ScreenTitles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  image: {
    width: 100,
    height: 100,
  },
});

const BillsTransaction = () => {
  return (
    <View style={styles.container}>
      {/* <ScreenTitles>Bills Transaction</ScreenTitles> */}
      {/* Render the Gift Card transaction data here */}
      <View>
        {/* <Text style={styles.text}>Withdrawals</Text> */}
        <View style={styles.container}>
          <View>
            <Image
              source={require("../../assets/icons/receipt.png")}
              style={styles.image}
            />
            <Text style={styles.text}>No record found</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BillsTransaction;
