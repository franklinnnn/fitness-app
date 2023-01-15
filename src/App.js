import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px}" } }} m="auto">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
