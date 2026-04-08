import { COLORS } from "@/constants/theme";
import { useAuth } from "@clerk/expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if(!isLoaded) return
    const inAuthScreen = segments[0] === '(auth)'
    if(!isSignedIn && !inAuthScreen) router.replace('/(auth)/login')
    else if (isSignedIn && inAuthScreen) router.replace('/(tabs)')
  }, [isLoaded, isSignedIn, segments]);

  if (!isLoaded)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 40,
            fontFamily: "JetBrainsMono-Medium",
            letterSpacing: 0.5,
            textTransform: "lowercase",
          }}
        >
          spotlight
        </Text>
      </View>
    );

  return <Stack screenOptions={{headerShown: false}} />
};

export default InitialLayout;
