import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function Form() {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formItem}>
        <Text>Base</Text>
        <TextInput style={styles.inputItem} keyboardType="numeric" />
      </View>
      <View style={styles.formItem}>
        <Text>Altura</Text>
        <TextInput style={styles.inputItem} keyboardType="numeric" />
      </View>
      <View style={styles.formItem}>
        <Text>Paneles</Text>
        <TextInput style={styles.inputItem} keyboardType="numeric" />
      </View>
      <Button title="Calcular" />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    gap: 16,
  },
  formItem: {
    width: "100%",
    position: "relative",
  },
  inputItem: {
    borderColor: "#333",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
});
