import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import Measurements from "../logic/measurements";
import { useState } from "react";

interface Props {
  setMeasures: (args0: Measurements) => void;
}

export default function Form(props: Props) {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [panels, setPanels] = useState(2);

  function calculate() {
    props.setMeasures(new Measurements(base, height, panels));
  }

  function handdleBase(value: string) {
    const numericValue = parseFloat(value);
    if (Number.isNaN(numericValue)) setBase(0);
    else setBase(numericValue);
  }

  function handdleHeight(value: string) {
    const numericValue = parseFloat(value);
    if (Number.isNaN(numericValue)) setHeight(0);
    else setHeight(numericValue);
  }

  function handdlePanels(value: string) {
    const numericValue = parseFloat(value);
    if (Number.isNaN(numericValue)) setPanels(0);
    else setPanels(numericValue);
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.formItem}>
        <Text>Base</Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="numeric"
          value={`${base}`}
          onChangeText={handdleBase}
        />
      </View>
      <View style={styles.formItem}>
        <Text>Altura</Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="numeric"
          value={`${height}`}
          onChangeText={handdleHeight}
        />
      </View>
      <View style={styles.formItem}>
        <Text>Paneles</Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="numeric"
          value={`${panels}`}
          onChangeText={handdlePanels}
        />
      </View>
      <Button onPress={calculate} title="Calcular" />
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
