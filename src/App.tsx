import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme/Theme-Provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route element={<Home />}>
          <Route path="/" />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
