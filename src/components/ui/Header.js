import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import logo from "../../assets/logo.svg"

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },
  logo: {
    height: "5em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: " auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "25px",
    marginRight: "25px",
    height: "40px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    // setOpen(true)
  }

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null)
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setAnchorEl(null)
    // setOpen(false)
  }

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ]

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) setValue(0)
        break
      case "/services":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break
      case "/customsoftware":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break
      case "/mobileapps":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case "/websites":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(3)
        }
        break
      case "/revolution":
        if (value !== 2) setValue(2)
        break
      case "/about":
        if (value !== 3) setValue(3)
        break
      case "/contact":
        if (value !== 4) setValue(4)
        break
      case "/estimate":
        if (value !== 5) setValue(5)
        break
      default:
        break
    }
  }, [value])

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
                aria-controls={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(e) => handleClick(e)}
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            {/* Menu */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  onClick={(event) => {
                    handleMenuItemClick(event, index)
                    setValue(1)
                    handleClose()
                  }}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  selected={index === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
