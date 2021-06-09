import React from "react";
import "./DashboardMain.css";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Overview from "./Overview";
import PieChart from "./PieChart";
import H1 from "./H1";

function DashboardMain() {
    let { slug } = useParams();
  
      return <Overview />
  
}

export default DashboardMain;
