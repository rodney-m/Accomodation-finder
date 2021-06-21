import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: 'auto',
    marginTop: '20px',
    borderRadius: '5px solid #0991CE',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is AccoFinder?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          is a web based platform aimed at facilitating HIT students who are eagerly in need of finding on or off-campus accommodation which suits their needs and budget, with the ease of applying from anywhere
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            X
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Do I need to be a student to make a booking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! You can only book an accommodation if you are a student
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How do I pay the rent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            x
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Are the prices negotiable?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The prices that you see on our website are are absolute and inherent
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Where can I see reviews about the property?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the reviews section of a particular property
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Where can I see all the requests that I have placed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can view your requests in the "Profile" section
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is your address?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            HIT
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
