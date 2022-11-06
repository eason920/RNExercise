import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import LibraryScreen from "./src/screens/LibraryScreen";
import LibraryDetailScreen from "./src/screens/LibraryDetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ProfileSettingScreen from "./src/screens/ProfileSettingScreen";

// Icons
import { Ionicons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const oName = {
  group: ["LibraryGroup", "ProfileGroup"],
  unit: {
    Home: ["LibraryScreen", "LibraryDetailScreen"],
    Profile: ["ProfileScreen", "ProfileSettingScreen"],
  },
};

const LibraryGroup = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "orange" },
      headerTintColor: "#fff",
    }}
  >
    <Stack.Screen
      name={oName.unit.Home[0]}
      component={LibraryScreen}
      options={{ title: "圖庫首頁" }}
    />
    <Stack.Screen
      name={oName.unit.Home[1]}
      component={LibraryDetailScreen}
      options={{ title: "返回圖庫首頁" }}
    />
  </Stack.Navigator>
);

const ProfileGroup = () => (
  <Stack.Navigator
    initialRouteName={oName.unit.Profile[0]}
    screenOptions={{
      headerStyle: { backgroundColor: "#3092ca" },
      headerTintColor: "#fff",
    }}
  >
    <Stack.Screen
      name={oName.unit.Profile[0]}
      component={ProfileScreen}
      options={{ title: "個人資料" }}
    />
    <Stack.Screen
      name={oName.unit.Profile[1]}
      component={ProfileSettingScreen}
      options={{ title: "放棄修改" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={oName.group[0]}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#ccc",
          tabBarIcon: ({ focused, color }) => {
            const size = 25;
            let icon = "";
            const outline = "-outline";
            switch (route.name) {
              case oName.group[0]:
                icon = "ios-cafe";
                break;
              case oName.group[1]:
                icon = "ios-happy";
                break;
              default:
                icon = "ios-home-outline";
            }
            if (!focused) {
              icon = icon + outline;
            }
            return (
              <Ionicons
                name={icon}
                size={size}
                color={color}
                style={{ marginTop: 8 }}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name={oName.group[0]}
          component={LibraryGroup}
          options={{ title: "LIBRARY" }}
        />
        <Tab.Screen
          name={oName.group[1]}
          component={ProfileGroup}
          options={{ title: "PROFILE" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
