import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/basic";
import { useState, useEffect } from "react";

// JSON
import { MOOKED_DATA } from "../api/json/MovieList";

export default function MovieScreen(props) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.navigation.push("MovieDetailScreen", { obj: item })}
    >
      <Image source={item.img} style={styles.itemPic} />
      <View style={styles.itemMain}>
        <Text
          style={styles.itemMainTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.title}
        </Text>
        <Text
          style={styles.itemMainContent}
          numberOfLines={5}
          ellipsizeMode="tail"
        >
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(MOOKED_DATA);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Movie List</Text>
      <FlatList
        data={dataSource}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
