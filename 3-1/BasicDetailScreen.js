import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function BasicDetailScreen(props) {
  // const [data, setData] = useState();
  // useEffect(() => {
  //   setData(props.route.params.obj);
  //   console.log("data is ", data);
  // }, []);
  const data = props.route.params.obj;

  return (
    <View>
      {console.log("in render >", data)}
      <Text>{data.Year}</Text>
      <Text>{data.Type}</Text>
      <Text>{data.Title}</Text>
      <Image
        style={{ width: 300, height: 450 }}
        source={{ uri: data.Poster }}
      />
      <Text>{data.imdbID}</Text>
    </View>
  );
}

// const json = {
//   "index": 0,
//   "item": {"Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//   "Title": "The Lord of the Rings: The Fellowship of the Ring",
//   "Type": "movie", "Year": "2001", "imdbID": "tt0120737"},
//   "separators": {"highlight": [Function highlight],
//   "unhighlight": [Function unhighlight],
//   "updateProps": [Function updateProps] << 這東西促使噴錯, 改父層只給 obj.item
// }
