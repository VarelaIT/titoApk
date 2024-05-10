import { StyleSheet, Text, View } from "react-native";
import Form from "../comp/form";
import DataDisplay from "../comp/dataDisplay";
import Measurements from "../logic/measurements";
import { useState } from "react";

export default function HomeScreen() {
  const [measures, setMeasures] = useState(new Measurements(0, 0, 0));

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.subtitle}>Puertas y ventanas</Text>
      <Text style={styles.title}>Tito</Text>

      <Form setMeasures={setMeasures} />

      <DataDisplay measures={measures} />

      <Text style={styles.footer}>VarelaIT®</Text>
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
    color: "#555",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
  },
  footer: {
    textAlign: "center",
    marginTop: 32,
  },
});
