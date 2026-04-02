import InitialLayout from "@/components/InitialLayout";
import ClerkandConvexProvider from "@/providers/ClerkandConvexProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkandConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkandConvexProvider>
  );
}
