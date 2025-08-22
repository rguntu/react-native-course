import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    width: 200,
    height: 50,
    backgroundColor: 'coral',
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
