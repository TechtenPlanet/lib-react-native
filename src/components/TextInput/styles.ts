import theme from '../../styles/theme';
console.log(theme.input)
const styles = {
  iconDefaultColor: theme.colors.primary,
  iconDefaultSize: theme.normalize(25),
  container: {
    ...theme.input,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
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
    textAlign: 'left',
    color: theme.colors.text,
  },
  placeHolderTextColor: {
    default: '#C7C7CD'
  },
};

export default theme.normalizeStyle(styles);
