import React, { useState } from "react";
import "./ApplyOffSidebar.css";
import { Slider } from "@material-ui/core";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function ApplyOffSidebar() {

  const [price, setPrice] = useState(0);

  const upDateRange = (e, data) => {
    setPrice(data);
  };

  const [houseType, setHouseType] =  useState('female');

  const upDateHouseType = (e, data) => {
    setHouseType(data);
  };


  return (
    <div className="ApplyOffSidebar">
      <div className="filterPrice">
        <h5>PRICE (per Month)</h5>
        <Slider min={0} max="100" value={price} onChange={upDateRange} />
        <h5>$ {price}</h5>
      </div>
      <div className="filterPrice">
        <FormControl component="fieldset">
          <FormLabel component="legend">House type (Gender)</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={houseType}
            onChange={upDateHouseType}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="mixed" control={<Radio />} label="Mixed" />
            
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default ApplyOffSidebar;
