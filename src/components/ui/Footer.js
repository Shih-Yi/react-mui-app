import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui//core/styles"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

import footerAdornment from "../../assets/Footer Adornment.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"

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
  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("xs")]: {
      height: "1.5em",
      width: "1.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-3.5em",
    right: "3em",
    [theme.breakpoints.down("xs")]: {
      right: "1em",
    },
  },
}))

const Footer = (props) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
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
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
