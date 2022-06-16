import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddCurrencyDialog from "../components/AddCurrencyDialog";
import Chart from "../components/Chart";
import CurrencyList from "../components/currencyList/CurrencyList";
import Header from "../components/Header";
import CurrencyTabs from "../components/tabs/CurrencyTabs";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    }
  });

  return <Header />;
};

export default Dashboard;
