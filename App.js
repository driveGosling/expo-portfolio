import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";
import LanguageCard from "./components/LanguageCard";

const langs = [
  {
    id: "1",
    lang: "JavaScript",
    experience: 3,
    logo: require("./assets/js-logo.png"),
  },
  {
    id: "2",
    lang: "Python",
    experience: 1,
    logo: require("./assets/python-logo.png"),
  },
  {
    id: "3",
    lang: "C#",
    experience: 1,
    logo: require("./assets/csharp-logo.png"),
  },
];

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <LanguageCard
            lang={item.lang}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
});
