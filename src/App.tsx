import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrencyList from "./components/currencyList/CurrencyList";
import Header from "./components/header/Header";
import CurrenciesPage from "./pages/CurrenciesPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Header userName="user" />
    /*<Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="currencies" element={<CurrenciesPage />} />
      </Routes>
  </Router>*/
  );
}

export default App;
