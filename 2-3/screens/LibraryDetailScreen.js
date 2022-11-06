import { useState } from "react";
import { Text, View, Image } from "react-native";

// Components
import { CpnBtnOpacity } from "../components/Buttons.js";

// slider
import { Slider } from "react-native-elements";

// Styles
import styles from "../styles/basic";

const picSizeMax = 300;

const funColor = (persent) => {
  return "hsl(38, " + persent + "%, 50%)";
};

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
        propsBgColor={funColor(100)}
        propsFontColor="#fff"
        propsFunction={() => setPicPath(ImagePath[0])}
      >
        <Image style={styles.icon} source={ImagePath[0]} />
      </CpnBtnOpacity>

      <CpnBtnOpacity
        propsTitle="Secend"
        propsBgColor={funColor(75)}
        propsFontColor="#fff"
        propsFunction={() => setPicPath(ImagePath[1])}
      >
        <Image style={styles.icon} source={ImagePath[1]} />
      </CpnBtnOpacity>

      <CpnBtnOpacity
        propsTitle="Random"
        propsBgColor={funColor(50)}
        propsFunction={() => setPicPath(ImagePath[new Date().getSeconds() % 5])}
      >
        <Image style={styles.icon} source={require("../images/random.png")} />
      </CpnBtnOpacity>

      <CpnBtnOpacity
        propsTitle="Re Select"
        propsBgColor={funColor(25)}
        propsFunction={() => props.navigation.pop()}
      >
        <Image style={styles.icon} source={require("../images/back.png")} />
      </CpnBtnOpacity>
    </View>
  );
}
