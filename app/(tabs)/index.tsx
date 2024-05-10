import { StyleSheet, Text, View } from "react-native";
import Form from "../comp/form";
import Measurements from "../logic/measurements";
import { useState } from "react";

export default function HomeScreen() {
  const [measures, setMeasures] = useState(new Measurements(0, 0, 0));

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subtitle}>Puertas y ventanas</Text>
      <Text style={styles.title}>Tito</Text>

      <Form measures={measures} setMeasures={setMeasures} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 32,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
