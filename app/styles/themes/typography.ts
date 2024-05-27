import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const typography = {
  fontFamily: roboto.style.fontFamily,
  button: {
    textTransform: undefined,
  },
  h1: {
    fontSize: "88px",
    fontWeight: "700",
    lineHeight: "136px",
    letterSpacing: "0",
  },
  h2: {
    fontSize: "64px",
    fontWeight: "700",
    lineHeight: "96px",
    letterSpacing: "0",
  },
  h3: {
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "72px",
    letterSpacing: "0",
  },
  h4: {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "48px",
    letterSpacing: "0",
  },
  h5: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "48px",
    letterSpacing: "0",
  },
  h6: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "32px",
    letterSpacing: "0",
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0",
    marginTop: "0",
  },
  subtitle2: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0",
  },
  body1: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0",
  },
  body2: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0",
    height: "20px",
  },
  caption: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0",
  },
  overline: {
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0",
  },
};

export default typography;
