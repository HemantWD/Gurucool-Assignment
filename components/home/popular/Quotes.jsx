import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./quotes.style";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/fetch";

import PopularQuotes from "../../common/cards/quotes/PopularQuotes";

const Quotes = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch();
  console.log(data);

  const handleCardPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daily Quote</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data={[data]}
            renderItem={({ item }) => (
              <PopularQuotes item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Quotes;
