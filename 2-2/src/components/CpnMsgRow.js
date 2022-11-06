import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default function CpnMsgRow(props) {
  return (
    <View>
      <View style={styles.outer}>
        <View style={{ width: 30 }}>
          <Ionicons name={props.name} size={props.size} color={"#3092ca"} />
        </View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    width: 200,
    fontSize: 16,
  },
});
