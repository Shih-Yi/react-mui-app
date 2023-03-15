import { createMuiTheme } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import blue from "@material-ui/core/colors/blue"

const mainBlue = "#6b95b5"
const titleBlue = "#0B72B9"
const subtitleGrey = "#868686"
const drakBlue = "#093b6e"

const theme = createMuiTheme({
  palette: {
    common: {
      blue: blue[100],
      orange: mainBlue,
      darkBlue: drakBlue,
    },
    primary: {
      main: purple[100],
    },
    secondary: {
      main: blue[100],
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      opacity: 0.5,
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.3rem",
      color: titleBlue,
      lineHeight: 2.0,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: titleBlue,
      fontWeight: 700,
      margin: "0.5em 0",
    },
    learnButton: {
      borderColor: mainBlue,
      color: mainBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: subtitleGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
  },
})

export default theme
