import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as StorageHelper from "../helpers/StorageHelper";

export default function CollectScreen(props) {
  const [collectData, setCollectData] = useState([]);

  const fnLoadStorage = async () => {
    try {
      const asData = await StorageHelper.getAsItem("asCollectList");
      const data = JSON.parse(asData);
      setCollectData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unSubscript = props.navigation.addListener("focus", () => {
      fnLoadStorage();
    });

    return unSubscript;
  }, [collectData]);

  return (
    <View>
      {collectData.map((item, index) => (
        <View key={index}>
          <Text>{item.Title}</Text>
          <Text>{item.Year}</Text>
          <Text>{item.imdbID}</Text>
          <Image style={styles.img} source={{ uri: item.Poster }} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 150,
  },
});
