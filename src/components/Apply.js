import React, {useContext} from "react";
import "./Apply.css";
import { IconButton } from "@material-ui/core";
import { Link, withRouter, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { PayedTuition } from "../Helper/Context";
import { Tuition } from "../Helper/Context";

function Apply() {
  const { tuitionPayed, setTuitionPayed } = useContext(PayedTuition);
  const { currentTuition, setCurrentTuition } = useContext(Tuition);


  let history = useHistory();

  let onCheckStatus = () => {
    history.push("/apply/status")
  }
  let onApplyOffcampus = () => {
    history.push("/apply/offcampus")
  }
  let onApplyOncampus = () => {
    if(tuitionPayed >= (0.75*currentTuition)){
      history.push("/apply/oncampus")
    } else{
      history.push("pay-fees")

    }
    
  }
  return (
    <div className="Apply">
      <div className="top-section">
        <div className="left">
          <h1>Apply On campus</h1>
            <IconButton>
            <Button variant="contained" color="primary" onClick={onApplyOncampus}>
            Apply
          </Button>
            </IconButton>
        </div>
        <div className="right">
          <h1>Appy Off-campus</h1>
            <IconButton>
            <Button variant="contained" color="primary" onClick={onApplyOffcampus}>
            Apply
          </Button>
            </IconButton>
        </div>
      </div>
      <div className="bottom-section">
        <h1>Check Application Status</h1>
          <IconButton>
          <Button variant="contained" color="primary" onClick={onCheckStatus}>
            Check
          </Button>
          </IconButton>
      </div>
    </div>
  );
}

export default withRouter(Apply);
