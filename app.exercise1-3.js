import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";

const fnColor = (persent) => {
  return "hsl(60, 80%, " + persent + "%)";
  // 0 red / 120 green /  240 blue
};

export default function App() {
  const [sin, setSin] = useState("");
  const fnSetSin = (text) => {
    setSin(text);
  };
  //
  const fnCheck = () => {
    if (sin !== "") {
      const tf = sin === "1100130" ? "正確~" : "錯誤,您輸入的是" + sin;
      alert("輸入" + tf);
    } else {
      alert("請輸入密碼");
    }
  };
  //
  
  return (
    <View style={styles.container}>
      <View style={styles.page} display="flex">
        <TextInput
          style={[{ backgroundColor: fnColor(35) }, styles.txtIpt]}
          onChangeText={(text) => fnSetSin(text)}
          value={sin}
          keyboardType={"numeric"}
          placeholder="請輸入"
          secureTextEntry={true}
          maxLength={7}
          editable={true}
          autoFocus={false}
        />
        <TouchableHighlight
          style={[styles.thl, styles.touchShare]}
          onPress={() => fnCheck()}
        >
          <Text style={[styles.thlText, styles.touchShareText]}>確認密碼</Text>
        </TouchableHighlight>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // STRUCTURE
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "greenyellow",
    backgroundColor: fnColor(50),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 5,
    fontSize: 70,
    color: "#fff",
    width: "100%",
    paddingLeft: "4%",
    textAlign: "center",
    textTransform: "uppercase",
  },
  // BUTTON 1
  buttonView: {
    backgroundColor: fnColor(70),
    width: "48%",
    height: 60,
    borderRadius: 10,
    paddingTop: 10,
  },
  button: {
    margin: 20,
    fontSize: 20,
    height: 50,
    padding: 20,
    lineHeight: 2,
    backgroundColor: "red",
    border: "solid 2px #aaa",
  },
  // BUTTON 2 : TouchableHighlight & TouchableOpacity
  touchShare: {
    height: 60,
    width: "48%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  touchShareText: {
    textAlign: "center",
    fontSize: 20,
  },
  //
  thl: {
    backgroundColor: fnColor(40),
  },
  thlText: {
    color: fnColor(100),
  },
  //
  to: {
    backgroundColor: fnColor(20),
  },
  toText: {
    color: fnColor(80),
  },
  iconTextBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  // INPUT
  txtIpt: {
    color: fnColor(80),
    width: 300,
    height: 80,
    borderWidth: 5,
    borderColor: fnColor(70),
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    fontSize: 20,
  },
  // COUNT
  countBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  // PAGE
  page: {
    flex: 13,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
  // NAV BAR
  navBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: fnColor(10),
    width: "100%",
  },
  navBarItem: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarItemText: {
    fontSize: 14,
    color: "#fff",
  },
});
