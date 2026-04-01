import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href='/notifications'>Go to Notif</Link>
      <Link href='/profile'>Go to Profile</Link>
    </View>
  );
}
