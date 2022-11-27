import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import * as StorageHelper from "../helpers/StorageHelper";

export default function BasicScreen(props) {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("The Lord of the Rings");

  // AsyncStorage v
  const fnLoadStorage = async (key) => {
    try {
      const value = await StorageHelper.getAsItem(key);
      // console.log("fnLoadStorage key is ", key, "/", value);
      if (value) {
        setKeyword(value);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fnSetStorage = async (key, value) => {
    const sValue = JSON.stringify(value);
    console.log("svalue is ", sValue);
    try {
      await StorageHelper.setAsItem(key, sValue);
    } catch (err) {
      console.log(err);
    }
  };

  const fnRemoveStorage = (key) => {
    try {
      StorageHelper.removeAsItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  // API v
  const fnSearch = () => {
    fnFetchApi();
  };

  useEffect(() => {
    fnLoadStorage("asKeyword");
    fnFetchApi();
  }, []);

  useEffect(() => {
    let aCollectList = [];
    data.map((item) => {
      if (item.collected) {
        aCollectList.push(item);
      }
    });
    fnSetStorage("asCollectList", aCollectList);
  });

  // Collect
  // val = .item.collected
  const fnCollect = (obj) => {
    console.log("obj is ", obj);
    const newData = data.map((item) => {
      const newItem = { ...item };
      // console.log("newItem is ", newItem);
      console.log(
        "newItem.imdbID === obj.imdbID?",
        newItem.imdbID === obj.imdbID
      );
      if (newItem.imdbID === obj.imdbID) {
        console.log("imdbID is ", obj.imdbID);
        newItem.collected = !newItem.collected;
      }
      return newItem;
    });
    console.log("newData", newData);
    setData(newData);
  };

  // HTML OF ITEM
  const fnFetchApi = () => {
    const apiUrl = "http://www.omdbapi.com/?apikey=xxxxxxx=" + keyword;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        console.log("api get data is ", resData.Search);
        setData(resData.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fnRenderItem = (obj) => {
    // console.log("fnRenderItem obj is ", obj);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.push("BasicDetail", { obj: obj.item })}
        style={styles.item}
      >
        <TouchableOpacity onPress={() => fnCollect(obj.item)}>
          {obj.item.collected === true ? (
            <Image
              source={require("../images/checked.png")}
              style={styles.itemCheckbox}
            />
          ) : (
            <Image
              source={require("../images/uncheck.png")}
              style={styles.itemCheckbox}
            />
          )}
        </TouchableOpacity>
        <Image style={styles.itemImage} source={{ uri: obj.item.Poster }} />
        <Text style={styles.itemContainer} ellipsizeMode="tail">
          {obj.item.Title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchIpt}
          value={keyword}
          onChangeText={(val) => setKeyword(val)}
        />
        <Button title="search" onPress={() => fnSearch()} />
        <Button
          title="setAsSearch"
          onPress={() => fnSetStorage("asKeyword", keyword)}
        />
        <Button
          title="removeAsSearch"
          onPress={() => fnRemoveStorage("asKeyword")}
        />
      </View>

      <FlatList
        data={data}
        renderItem={(obj) => fnRenderItem(obj)}
        keyExtractor={(obj) => obj.imdbID}
        style={styles.itemBox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    // flex: 1,
    // backgroundColor: "red",
    // flexDirection: "row",
    // justifyContent: "center",
    padding: 15,
    width: "100%",
  },
  searchIpt: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
    width: "70%",
    paddingLeft: 10,
    height: 60,
    fontSize: 16,
  },

  // ITEM
  itemBox: {
    // flex: 10,
    backgroundColor: "#eaeaea",
    paddingLeft: 15,
    paddingRight: 15,
    // paddingBottom: 100,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
    // padding: 12,
  },
  itemCheckbox: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  itemImage: { width: "13%", height: 75 },
  itemContainer: {
    padding: 15,
    width: "75%",
    // some
  },
});
