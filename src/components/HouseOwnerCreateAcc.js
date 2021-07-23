import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import "./HouseOwnerCreateAcc.css";
import { Link, useHistory } from "react-router-dom";
import LogInModal from "../components/LogInModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function HouseOwnerCreateAcc() {
  const classes = useStyles();

  const [gender, setGender] = React.useState("");

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  let history = useHistory();

   const handleChange = (event) => {
    setGender(event.target.value);
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you for applying to list your account. You will get an email once your request is approved");
    setShowModal(true);
  };

  return (
    <div className="HouseOwnerCreateAcc {classes.root}">
      <p className="redirect">
        Take me <Link to="/"> &lt; &lt; Back Home</Link>
      </p>
      <div className="container">
        <h3>
          Please Note that for your house to be listed your account has to be
          approved first
        </h3>
        <p>
          <em>
            Already been approved ? <Link to="/landlords/login">LogIn</Link>
          </em>
        </p>
        <div>
          <TextField
            label="First Name"
            className={classes.textField}
            margin="dense"
          />
          <TextField
            label="Last Name"
            className={classes.textField}
            margin="dense"
          />
          <TextField
            label="Phone Number"
            className={classes.textField}
            margin="dense"
          />

          <TextField
            label="Address Of House"
            multiline
            style={{ margin: 8 }}
            placeholder="Address"
            helperText="Please enter the address of the house to be listed"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <FormControl className={classes.formControl}>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={handleChange}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="both">Both</MenuItem>
            </Select>
            <FormHelperText>
              Gender for the desired students at your house
            </FormHelperText>
          </FormControl>

          <TextField
            label="Total Number of available beds"
            className={classes.textField}
            margin="dense"
            type="number"
          />
          <br />
          <TextField
            label="Price Per Month $USD "
            className={classes.textField}
            margin="dense"
          />

          <TextField
            type="file"
            multiple="multiple"
            helperText="Upload House pictures *max 5"
          />
          <br />
          <p>
            <em>
              Enter your email and a password of your choice below. Please take
              note of your password as it is the one that will be used for login
              once your account is approved
            </em>
          </p>
        </div>
        <div>
          <TextField
            label="Email"
            className={classes.textField}
            helperText="Email to be used for login"
            variant="filled"
            type="email"
          />
          <TextField
            label="Password"
            className={classes.textField}
            helperText="Password to be used for login"
            variant="filled"
            type="password"
          />
          <TextField
            label=" Confirm Password"
            className={classes.textField}
            helperText="Password to be used for login"
            variant="filled"
            type="password"
          />
        </div>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </div>

      { showModal ? <LogInModal message={message} setShowModal={setShowModal} /> : ""}
    </div>
  );
}
