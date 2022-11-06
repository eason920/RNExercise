import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Components
import { CpnBtnOpacity } from "../components/Buttons.js";

// slider
import { Slider } from "react-native-elements";

const picSizeMax = 300;

export default function HomeDetailScreen(props) {
  const ImagePath = props.route.params.ary;
  const [picPath, setPicPath] = useState(ImagePath[0]);

  const [picSize, setPicSize] = useState(0.9);

  return (
    <View style={styles.container}>
      <View style={styles.picBox}>
        <Image
          style={{ width: picSize * picSizeMax, height: picSize * picSizeMax }}
          source={picPath}
        />
      </View>
      <Text>size of pic :{Math.round(picSize * picSizeMax * 10) / 10}</Text>
      <View style={styles.slider}>
        <Slider
          value={picSize}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={"black"}
          thumbStyle={{ width: 25, height: 25 }}
          minimumTrackTintColor={"#666"}
          onValueChange={(value) => {
            setPicSize(value);
          }}
        />
      </View>
      <CpnBtnOpacity
        propsTitle="First"
        propsBgColor="#333"
        propsFontColor="#fff"
        propsFunction={() => setPicPath(ImagePath[0])}
      >
        <Image style={styles.icon} source={ImagePath[0]} />
      </CpnBtnOpacity>

      <CpnBtnOpacity
        propsTitle="Secend"
        propsBgColor="#333"
        propsFontColor="#fff"
        propsFunction={() => setPicPath(ImagePath[1])}
      >
        <Image style={styles.icon} source={ImagePath[1]} />
      </CpnBtnOpacity>

      <CpnBtnOpacity
        propsTitle="Random"
        propsBgColor="#aaa"
        propsFunction={() => setPicPath(ImagePath[new Date().getSeconds() % 5])}
      >
        <Image style={styles.icon} source={require("../images/random.png")} />
      </CpnBtnOpacity>

      <CpnBtnOpacity
        propsTitle="Re Select"
        propsBgColor="#ccc"
        propsFunction={() => props.navigation.pop()}
      >
        <Image style={styles.icon} source={require("../images/back.png")} />
      </CpnBtnOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picBox: {
    width: picSizeMax,
    height: picSizeMax,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaeaea",
    borderRadius: picSizeMax / 2,
    marginBottom: 30,
  },
  slider: {
    alignItems: "stretch",
    justifyContent: "center",
    width: 150,
    marginBottom: 10,
    marginTop: 10,
  },
  mainPic: {
    width: 300,
    height: 300,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 15,
  },
});
