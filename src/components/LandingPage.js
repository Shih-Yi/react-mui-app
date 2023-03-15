import React from "react"
import Lottie from "react-lottie"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonArrow from "./ui/ButtonArrow.js"

import animationData from "../animations/landinganimation/data.js"

const useStyles = makeStyles((theme) => ({}))

const LandingPage = () => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <div>
              Bringing West Coast Technology <br />
              to the world
            </div>
            <Grid container direction="row">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Learn More
                  <ButtonArrow width={15} height={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} height={"50%"} width={"50%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
