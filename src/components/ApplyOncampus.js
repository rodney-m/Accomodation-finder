import React, { useState } from "react";
import "./ApplyOncampus.css";
import HostelsImg from "../images/hostels.jpg";
import { ImManWoman, ImMan, ImWoman} from "react-icons/im";
import {Link} from "react-router-dom"
import ViewHostel from "./ViewHostel";
import WifiIcon from '@material-ui/icons/Wifi';
import VideocamIcon from '@material-ui/icons/Videocam';

function ApplyOnCampus() {
  const [currentIndex, setCurrentIndex] = useState(null);

  

  const Hostels = [
    {
      name: "Hostel 1",
      gender: <ImManWoman/>,
      prize: 8000,
      amenities: [
        {
          name: "wifi", 
          icon : <WifiIcon />,
        }, 
        {
          name: "cctv",
          icon : <VideocamIcon />,
        }
      ]
    
    },
    {
      name: "Hostel 2",
      gender: <ImMan />,
      prize: 6000,
    },
    {
      name: "Hostel 3",
      gender: <ImMan />,
      prize: 6000,
    },
    {
      name: "Hostel 4",
      gender: <ImWoman/>,
      prize: 6000,
    },
  ];
  return (
    < div className="relative">
    <div className="ApplyOncampus">
      {Hostels.map((hostel, index) => {
        return (
          <Link to="/apply/oncampus/">
            <div
              className="hostelThumbnail"
              onClick={() => setCurrentIndex(index)}
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
    {currentIndex !== null ? <ViewHostel hostel={Hostels[currentIndex]} setCurrentIndex={setCurrentIndex}/> : ""}

    </div>
    
  );
}

export default ApplyOnCampus;
