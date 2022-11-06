import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const color = "#3092ca";
export default function CpnTextInput(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ width: 30 }}>
        <Ionicons name={props.name} size={props.size} color={color} />
      </View>
      <TextInput
        style={[styles.txtIpt, props.style]}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        secureTextEntry={false}
        editable={true}
        autoFocus={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtIpt: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: color,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    marginRight: 20,
  },
});
