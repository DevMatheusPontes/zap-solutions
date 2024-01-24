import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

const App = () => {
  const [locale, setLocale] = useState();

  const theme = createTheme(
    {
      scrollbarStyles: {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          borderRadius: "7px"
        }
      },
      palette: {
        primary: { main: "#3B5998" },
        third: { main: "#d17308" }
      },

      barraSuperior: {
        primary: { main: "#3B5998" },
        secondary: { main: "#ffffff" }
      },

      barraLateral: {
        primary: { main: "#FFFFFF" }
      },

      icons: {
        primary: { main: "#DFE1EE" }
      },
      textColorMenu: {
        primary: { main: "#000000" },
        secondary: { main: "#3B5998" }
      }
    },
    locale
  );

  useEffect(() => {
    const i18nlocale = localStorage.getItem("i18nextLng");
    const browserLocale =
      i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

    if (browserLocale === "ptBR") {
      setLocale(ptBR);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
