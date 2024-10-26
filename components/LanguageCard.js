import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LanguageCard = ({ lang, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.language}>{lang}</Text>
        <Text style={styles.experience}>{experience} лет опыта</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  language: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 14,
    color: "gray",
  },
});

export default LanguageCard;
