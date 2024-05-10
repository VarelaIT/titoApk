import { Text, View, StyleSheet } from "react-native";
import Measurements from "../logic/measurements";
interface Props {
  measures: Measurements;
}

export default function DataDisplay(props: Props) {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.dataItem}>
        Rieles: {props.measures.getRails().toFixed(2)}
      </Text>
      <Text style={styles.dataItem}>
        Laterales: {props.measures.getLaterals().toFixed(2)}
      </Text>
      <Text style={styles.dataItem}>
        Afaisal y cabezal: {props.measures.getAlfaisal().toFixed(2)}
      </Text>
      <Text style={styles.dataItem}>
        Jambas: {props.measures.getJambas().toFixed(2)}
      </Text>
      <Text style={styles.dataItem}>
        Base cristales: {props.measures.getGlassBase().toFixed(2)}
      </Text>
      <Text style={styles.dataItem}>
        Altura cristales: {props.measures.getGlassHeigth().toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    display: "flex",
    gap: 8,
    marginTop: 32,
  },
  dataItem: {
    fontSize: 20,
    color: "#222",
  },
});
