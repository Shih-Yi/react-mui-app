import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui//core/styles"
import Grid from "@material-ui/core/Grid"

import footerAdornment from "../../assets/Footer Adornment.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  mainContainer: {
    position: "absolute",
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
  link: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "2em",
  },
}))

const Footer = (props) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/services"
              onClick={() => {
                props.setValue(1)
                props.setSelectedIndex(0)
              }}
              className={classes.link}
            >
              Service
            </Grid>
            <Grid
              item
              component={Link}
              to="/customsoftware"
              onClick={() => {
                props.setValue(1)
                props.setSelectedIndex(1)
              }}
              className={classes.link}
            >
              Custom Software
            </Grid>
            <Grid
              item
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1)
                props.setSelectedIndex(2)
              }}
              className={classes.link}
            >
              Mobile APPs
            </Grid>
            <Grid
              item
              component={Link}
              to="/websites"
              onClick={() => {
                props.setValue(1)
                props.setSelectedIndex(3)
              }}
              className={classes.link}
            >
              Websites
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => props.setValue(2)}
              className={classes.link}
            >
              Revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => props.setValue(3)}
              className={classes.link}
            >
              About Us
            </Grid>
            <Grid item className={classes.link}>
              History
            </Grid>
            <Grid item className={classes.link}>
              History
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/contact"
              onClick={() => props.setValue(4)}
              className={classes.link}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  )
}

export default Footer
