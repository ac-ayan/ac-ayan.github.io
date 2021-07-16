import React from "react";
import "../css/education.css";

import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SchoolIcon from "@material-ui/icons/School";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Education() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "6px 16px",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const classes = useStyles();
  return (
    <div className="education-section" name="education">
      <h2>Education</h2>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {/* 9:30 am */}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <AccountBalanceIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Kalinga Institute of Industrial Technology
              </Typography>
              <Typography>
                Bachelor of Technology in Computer Science and Engineering.
                <br></br>Semester : 5th<br></br>CGPA : 9.30 / 10.0<br></br>
                Website : <a href="https://kiit.ac.in/">https://kiit.ac.in/</a>
                <br></br>Address : Patia, Bhubaneswar, Odisha, India 751024
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {/* 10:00 am */}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Arambagh Vivekananda Academy
              </Typography>
              <Typography>
                Board : CBSE<br></br>Senior Secondary Exam (+2) : 87.2 %
                <br></br>Website :{" "}
                <a href="http://www.arambaghvivekanandaacademy.com/">
                  http://www.arambaghvivekanandaacademy.com/
                </a>
                <br></br>
                Address : Basantapur Sports Complex, Ward No. 11 P.O.- Arambagh,
                Dist.-Hooghly, W.B., Pin-712601
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            {/* <TimelineConnector className={classes.secondaryTail} /> */}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Arambagh Vivekananda Academy
              </Typography>
              <Typography>
                Board : CBSE<br></br>Secondary Exam : 10 CGPA<br></br>Website :{" "}
                <a href="http://www.arambaghvivekanandaacademy.com/">
                  http://www.arambaghvivekanandaacademy.com/
                </a><br></br>
                Address : Basantapur Sports Complex, Ward No. 11 P.O.- Arambagh,
                Dist.-Hooghly, W.B., Pin-712601
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
export default Education;
