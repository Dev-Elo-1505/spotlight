import { useAuth } from "@clerk/expo";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View>
      <TouchableOpacity style={{ padding: 50}} onPress={() => signOut()}>
        <Text>Sign out brooo</Text>
      </TouchableOpacity>
    </View>
  );
}
