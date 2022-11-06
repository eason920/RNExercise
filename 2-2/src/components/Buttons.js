import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CpnBtnOpacity = ({
  propsTitle,
  propsBgColor,
  propsFontColor,
  propsFunction,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btnBasic, { backgroundColor: propsBgColor }]}
      onPress={propsFunction}
    >
      {children}
      <Text style={{ color: propsFontColor }}>{propsTitle}</Text>
    </TouchableOpacity>
  );
};

CpnBtnOpacity.defaultProps = {
  propsBgColor: "#aaa",
  propsFontColor: "#000",
  propsTitle: "none",
};

const styles = StyleSheet.create({
  btnBasic: {
    borderRadius: 18,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    marginBottom: 10,
  },
});
