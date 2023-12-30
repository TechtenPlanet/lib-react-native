import { PixelRatio, Dimensions } from "react-native";

const ratio = PixelRatio.get();

const normalize = (size: number) => {
  const { width, height } = Dimensions.get("window");

  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size * 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.15;
    } else if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    return size * 1.27;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.2;
    } else if (height >= 667 && height <= 735) {
      return size * 1.25;
    }
    return size * 1.4;
  }

  return size;
};

export const reverseNormalize = (size: number) => {
  const { width, height } = Dimensions.get("window");

  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size / 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size / 1.15;
    }

    return size / 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size / 1.15;
    } else if (height >= 667 && height <= 735) {
      return size / 1.2;
    }

    return size / 1.27;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size / 1.2;
    } else if (height >= 667 && height <= 735) {
      return size / 1.25;
    }
    return size / 1.4;
  }

  return size;
};

export const normalizeStyle = (
  styles: any,
  reverse = false,
  targetProperties = [
    "fontSize",
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "marginHorizontal",
    "marginVertical",
    "padding",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingHorizontal",
    "paddingVertical",
    "height",
    "minHeight",
    "maxHeight",
    "width",
    "minWidth",
    "maxWidth",
    "borderRadius",
    "lineHeight",
    "bottom",
    "top",
    "left",
    "right"
  ]
) => {
  const doNormalize = (styles: any) => {
    Object.keys(styles).forEach((key) => {
      if (typeof styles[key] === "object" && styles[key] !== null) {
        styles[key] = doNormalize(styles[key]);
      } else {
        if (targetProperties.includes(key) && typeof styles[key] === "number") {
          styles[key] = reverse
            ? Math.round(reverseNormalize(styles[key]))
            : normalize(styles[key]);
        }
      }
    });
    return styles;
  };
  const normalizedStyles = doNormalize({ ...styles });
  return normalizedStyles;
};

export default normalize;
