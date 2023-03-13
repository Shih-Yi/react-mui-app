import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import theme from "./ui/Theme"
import Header from "./ui/Header"

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>Home</div>} />
          <Route exact path="/services" element={<div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            element={<div>Custom Software</div>}
          />
          <Route exact path="/mobilapps" element={<div>Mobil Apps</div>} />
          <Route exact path="/websites" element={<div>Websites</div>} />
          <Route exact path="/revolution" element={<div>Revolution</div>} />
          <Route exact path="/about" element={<div>About Us</div>} />
          <Route exact path="/contact" element={<div>Contact Us</div>} />
          <Route exact path="/estimate" element={<div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
