import React from "react";
import { StatusBar } from "react-native";
// Styles
import { ThemeProvider } from "styled-components/native";
import theme from "theme/index";
// Navigation
import Navigation from "navigation/index";

interface Props {}

const App: React.FC<Props> = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      backgroundColor={theme.colors.background}
      barStyle="dark-content"
    />
    <Navigation />
  </ThemeProvider>
);

export default App;
