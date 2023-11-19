import { useRef } from "react";
import { View, ScrollView, SafeAreaView, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Quotes, ScreenHeaderBtn } from "../components";
import ShareSaveButton from "../components/home/ShareSave/ShareSaveButton";

const Home = () => {
  const router = useRouter();

  const viewShotRef = useRef();

  const handleSharePress = async () => {
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture();
        console.log("Image Uri: ", uri);
        Alert.alert("Share", "Share Functionality to be implemented.");
      } else {
        console.log("ViewShot ref error");
      }
    } catch (error) {
      console.error("Capture error:", error);
    }
  };

  const handleSavePress = async () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView style={{ flex: 1, padding: SIZES.medium }}>
        <View>
          <Quotes />
        </View>
        <View ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
          <ShareSaveButton
            onSharePress={handleSharePress}
            onSavePress={handleSavePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
