import { createMuiTheme } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import blue from "@material-ui/core/colors/blue"

const mainBlue = "#d7e4fa"

const theme = createMuiTheme({
  palette: {
    common: {
      blue: mainBlue,
      orange: mainBlue,
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
  },
})

export default theme
