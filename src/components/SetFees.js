import React, {useState, useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import { Tuition } from "../Helper/Context";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));



function SetFees() {
  const { currentTuition, setCurrentTuition } = useContext(Tuition);
    const [fees, setFees] = useState(0);

    const onSetFees = (e) => {
        e.preventDefault();
    }

  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <h3>Set Tuition Fees</h3>
        <h4>Current set Tuition is $: {currentTuition}</h4>

        <TextField
          id="filled-basic"
          type="number"
          label="Tuition fees For Semester ($)"
          variant="filled"
          onChange={(e) => setFees(e.target.value)}
        />
        <IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={onSetFees}
          >
            Update
          </Button>
        </IconButton>
      </form>
    </div>
  );
}

export default SetFees;
