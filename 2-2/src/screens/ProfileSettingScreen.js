import { StyleSheet, Text, View, TextInput } from "react-native";
import { CpnBtnOpacity } from "../components/Buttons";
import { useState } from "react";

// Component
import CpnTextInput from "../components/TextInput";

// Styles
import stylesBasic from "../styles/basic";

export default function ProfileSettingScreen(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const funSubmit = () => {
    if (name && phone && mail) {
      props.route.params.childrenValue({
        name,
        phone,
        mail,
      });
      props.navigation.pop();
    } else {
      alert("name、phone、mail 不得為空白");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={stylesBasic.h1}>Profile Setting</Text>
      <CpnTextInput
        name={"ios-man"}
        size={30}
        onChangeText={(val) => setName(val)}
        value={name}
        keyboardType={"default"}
        placeholder="請輸入名子"
        maxLength={6}
        style={{ marginBottom: 10 }}
      />
      <CpnTextInput
        name={"ios-phone-portrait"}
        size={25}
        onChangeText={(val) => setPhone(val)}
        value={phone}
        keyboardType={"numeric"}
        placeholder="請輸入電話"
        maxLength={10}
        style={{ marginBottom: 10 }}
      />
      <CpnTextInput
        name={"ios-mail-open"}
        size={25}
        onChangeText={(val) => setMail(val)}
        value={mail}
        keyboardType={"default"}
        placeholder="請輸入電子信箱"
        secureTextEntry={false}
        maxLength={30}
        editable={true}
        autoFocus={false}
        style={{ marginBottom: 10 }}
      />
      <CpnBtnOpacity
        propsTitle="確認送出"
        propsBgColor="#3092ca"
        propsFontColor="#fff"
        propsFunction={() => funSubmit()}
      />
      <CpnBtnOpacity
        propsTitle="放棄修改"
        propsBgColor="#aaa"
        propsFontColor="#333"
        propsFunction={() => props.navigation.pop()}
      />
    </View>
  );
}

const fnColor = (persent) => {
  return "hsl(30, 100%, " + persent + "%)";
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
