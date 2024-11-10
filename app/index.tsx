import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {

  const handleNext = () => {
    router.replace("./otp");
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000'
      }}
    >
      <Button title="Click ME" onPress={handleNext} />
    </View>
  );
}
