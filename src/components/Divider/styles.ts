import { theme } from 'lib_styles';
const styles = {
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.dividerDefaultColor
  },
  verticalDivider: {
    height: '100%',
    width: 1,
    backgroundColor: theme.colors.dividerDefaultColor
  },
  spacingHorizontal: {
    marginVertical: 20,
  },
  spacingVertical: {
    marginHorizontal: 20,
  }
};
export default styles;
// export default theme.normalizeStyle(styles);
