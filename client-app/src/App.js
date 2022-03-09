import React from 'react';
import { Routes, Route } from "react-router-dom";
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { HelmetProvider } from "react-helmet-async";
//Own
import { Home} from './pages/home';
import { Items } from './pages/items';
import { Item } from './pages/item';
import { Header } from './components/header/header'
import "./App.css";

const theme = createTheme({
  palette: {
    background: {
      default: "#EDEDED"
    },
    color: 'black'
  },
});

function App() {
  return (
    <HelmetProvider>
      <title>Mercado Libre Chile - Envíos Gratis en el día</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
      <meta charset="utf-8"></meta>
      <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles." data-head-react="true"></meta>
      <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" data-head-react="true"></meta>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}


export default App;
