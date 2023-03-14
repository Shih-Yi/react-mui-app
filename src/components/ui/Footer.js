import React from "react"
import { makeStyles } from "@material-ui//core/styles"

import footerAdornment from "../../assets/Footer Adornment.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "20em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("sm")]: {
      width: "16em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "10em",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  )
}

export default Footer
