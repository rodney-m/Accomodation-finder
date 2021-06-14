import React, { useState } from "react";
import "./ApplyOncampus.css";
import HostelsImg from "../images/hostels.jpg";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import {Link} from "react-router-dom"

function ApplyOnCampus() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const Hostels = [
    {
      name: "Hostel 1",
      gender: <FcBusinessman />,
      gender2: <FcBusinesswoman />,
      prize: 8000,
    },
    {
      name: "Hostel 2",
      gender: <FcBusinessman />,
      prize: 6000,
    },
    {
      name: "Hostel 3",
      gender: <FcBusinessman />,
      prize: 6000,
    },
    {
      name: "Hostel 4",
      gender: <FcBusinesswoman />,
      prize: 6000,
    },
  ];
  return (
    <div className="ApplyOncampus">
      {Hostels.map((hostel, index) => {
        return (
          <Link to="/apply/oncampus/view/">
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
                {currentIndex}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ApplyOnCampus;
