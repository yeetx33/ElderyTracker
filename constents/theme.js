import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};
export const COLORS = {
  primary: '#d9e6f1',
  secondary: '#4e6475',
  inputBorder: '#DEDEDE',
  gray: 'gray',
  bg: '#f2f2f2f1',
  danger: '#B82222',
  success: '#76954D',
  dark: '#d1d1d1'
};
export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const colorMapping = {
  "A": "#990000",
  "B": "#003366",
  "C": "#006600",
  "D": "#666600",
  "E": "#4B0082",
  "F": "#FF8C00",
  "G": "#C71585",
  "H": "#8B4513",
  "I": "#00BFFF",
  "J": "#993366",
  "K": "#006400",
  "L": "#004040",
  "M": "#1A237E",
  "N": "#8B0000",
  "O": "#556B2F",
  "P": "#000033",
  "Q": "#A9A9A9",
  "R": "#B8860B",
  "S": "#404040",
  "T": "#000000",
  "U": "#808080",
  "V": "#008B8B",
  "W": "#9400D3",
  "X": "#8B0000",
  "Y": "#4682B4",
  "Z": "#8B4513"
}