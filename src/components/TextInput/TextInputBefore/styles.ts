import theme from "lib_styles/theme";
const styles = {
  iconDefaultColor: theme.colors.primary,
  iconDefaultSize: theme.normalize(25),
  container: {
    flexDirection: "row",
    width: "100%",
    height: 36,
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  containerError: {
    flexDirection: "row",
    width: "100%",
    height: 36,
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  },
  icon: {
    marginLeft: 8,
  },
  iconRight: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    // height: "100%",
    marginLeft: 6,
    fontFamily: theme.defaultFontFamilyRegular,
    fontSize: 12,
    textAlign: "left",
    color: theme.colors.text,
  },
  error: {
    flex: 1,
    marginLeft: 6,
    fontFamily: theme.defaultFontFamilyRegular,
    fontWeight: "normal",
    fontSize: 12,
    textAlign: "left",
    color: "red",
  },
  placeHolderTextColor: {
    default: "#C7C7CD",
    error: "red",
  },
};

export default theme.normalizeStyle(styles);
