import { StyleSheet } from "react-native";

const getRanndomeQuote = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  squareBox: {
    width: 350,
    height: 450,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    elevation: 5,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
});

export { styles, getRanndomeQuote };
