import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import styles from "../styles/basic";

// Components
import { CpnBtnOpacity } from "../components/Buttons.js";

export default function MovieDetailScreen(props) {
  const obj = props.route.params.obj;
  return (
    <SafeAreaView>
      <ScrollView style={[styles.MDcontainer]}>
        <View style={styles.MDview}>
          <Text style={styles.h1}>Movie Detail</Text>
          <Text style={styles.h2}>{obj.title}</Text>
          <Image source={obj.img} style={{ width: 200, height: 200 }} />
          <Text style={styles.MDcontent}>{obj.content}</Text>
          <CpnBtnOpacity
            propsTitle="BACK"
            propsBgColor={"#4c0200"}
            propsFontColor={"#fff"}
            propsFunction={() => props.navigation.pop()}
          >
            <Image style={styles.icon} source={require("../images/back.png")} />
          </CpnBtnOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
