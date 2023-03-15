import React from "react"
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonArrow from "./ui/ButtonArrow.js"
import Typography from "@material-ui/core/Typography"

import animationData from "../animations/landinganimation/data.js"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    width: 145,
    height: 45,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "1rem",
    width: 145,
    height: 45,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.dark,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}))

const LandingPage = () => {
  const classes = useStyles()
  const theme = useTheme()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br />
              to the world
            </Typography>
            <Grid
              container
              justify="center"
              direction="row"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  <span>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
