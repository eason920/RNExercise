import { StyleSheet, Text, View, Image } from "react-native";
import { CpnBtnOpacity } from "../components/Buttons";

// JSON
import { ImagePathHuman, ImagePathFood } from "../api/json/ImagePath";

// Styles
import styles from "../styles/basic";

export default function LibraryScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Library</Text>
      <CpnBtnOpacity
        propsTitle="Human Detail"
        propsBgColor="orange"
        propsFontColor="#fff"
        propsFunction={() =>
          props.navigation.push("LibraryDetailScreen", { ary: ImagePathHuman })
        }
      >
        <Image style={styles.icon} source={ImagePathHuman[1]} />
      </CpnBtnOpacity>
      <CpnBtnOpacity
        propsTitle="Food Detail"
        propsBgColor="orange"
        propsFontColor="#fff"
        propsFunction={() =>
          props.navigation.push("LibraryDetailScreen", { ary: ImagePathFood })
        }
      >
        <Image style={styles.icon} source={ImagePathFood[0]} />
      </CpnBtnOpacity>
    </View>
  );
}
