import { StyleSheet, Text, View } from "react-native";
import { CpnBtnOpacity } from "../components/Buttons";
import { useState } from "react";

// Styles
import stylesBasic from "../styles/basic";

// Component
import CpnMsgRow from "../components/CpnMsgRow";

export default function ProfileScreen(props) {
  const [val, setVal] = useState({
    name: "Eason",
    phone: "0988168168",
    mail: "eason920@gmail.com",
  });
  const funSetVal = (v) => {
    setVal(v);
  };
  return (
    <View style={styles.container}>
      <Text style={stylesBasic.h1}>Profile</Text>
      <CpnMsgRow name={"ios-man"} size={30} title={val.name} />
      <CpnMsgRow name={"ios-phone-portrait"} size={25} title={val.phone} />
      <CpnMsgRow name={"ios-mail-open"} size={25} title={val.mail} />
      <CpnBtnOpacity
        propsTitle="修改資料"
        propsBgColor="#3092ca"
        propsFontColor="#fff"
        propsFunction={() =>
          props.navigation.push("ProfileSettingScreen", {
            childrenValue: (arg) => funSetVal(arg),
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
