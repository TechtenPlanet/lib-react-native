import theme from "lib_styles/theme";

const styles = {
  background: {
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundFull: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingColor: theme.colors.primary,
  text: {
    marginTop: 14,
    fontSize: 12,
    fontFamily: theme.defaultFontFamilyRegular,
    textAlign:"center"
  },
};

export default theme.normalizeStyle(styles);
