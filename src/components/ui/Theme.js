import { createMuiTheme } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import green from "@material-ui/core/colors/green"

const mainBlue = "#e6f542"

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
      main: green[300],
    },
  },
})

export default theme
