import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles, getRanndomeQuote } from "./popularquotes.style";

const PopularQuotes = ({ item }) => {
  const [backgroundColor, setBackgroundColor] = useState(getRanndomeQuote());

  useEffect(() => {
    setBackgroundColor(getRanndomeQuote());
  }, [item]);
  return (
    <TouchableOpacity style={{ ...styles.cardContainer, backgroundColor }}>
      <View style={{ ...styles.squareBox, backgroundColor }}>
        <Text style={styles.quoteText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularQuotes;
