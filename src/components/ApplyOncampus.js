import React, { useState } from "react";
import "./ApplyOncampus.css";
import HostelsImg from "../images/hostels.jpg";
import {Link} from "react-router-dom"
import ViewHostel from "./ViewHostel";
// import WifiIcon from '@material-ui/icons/Wifi';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import { ImManWoman, ImMan, ImWoman} from "react-icons/im";

import {useSelector} from "react-redux"

function ApplyOnCampus() {
  const [hostelCurrentIndex, setHostelCurrentIndex] = useState(null);

  const hostels = useSelector(state => state.hostels)


  return (
    < div className="relative">
    <div className="ApplyOncampus">
      {hostels.map((hostel, index) => {
        return (
          <Link to={`/apply/oncampus/${index+1}`}>
            <div
              className="hostelThumbnail"
              onClick={() => setHostelCurrentIndex(index)}
            >
              <div className="image">
                <img src={HostelsImg} alt={hostel.name} />
              </div>
              <div className="text">
                <h3>{hostel.name}</h3>
                <h4>
                  Gender :{" "}
                  <span className="gender">
                    {hostel.gender2} {hostel.gender}
                  </span>
                </h4>
                <h2>$ {hostel.prize}</h2>
              </div>
            </div>
          </Link>
        );
      })}

     
    </div>
    {hostelCurrentIndex !== null ? <ViewHostel hostel={hostels[hostelCurrentIndex]} setHostelCurrentIndex={setHostelCurrentIndex}/> : ""}

    </div>
    
  );
}

export default ApplyOnCampus;
