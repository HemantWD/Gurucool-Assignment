import { Text, View, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../../../constants";

const ShareSaveButton = ({ onSharePress, onSavePress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SIZES.medium,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <TouchableOpacity
        onPress={onSharePress}
        style={{
          backgroundColor: COLORS.gray,
          padding: SIZES.medium,
          borderRadius: 10,
          width: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ color: COLORS.white }}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSavePress}
        style={{
          backgroundColor: COLORS.gray,
          padding: SIZES.medium,
          borderRadius: 10,
          width: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ color: COLORS.white }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareSaveButton;
