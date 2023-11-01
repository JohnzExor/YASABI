import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme/Theme-Provider";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<></>} />
          <Route path="/portfolio/:id" element={<Portfolio />} />
          <Route path="/portfolio/:id/casestudy/:id" element={<CaseStudy />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
