import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import "vazir-font/dist/font-face.css";
import React from "react";

function EnPrivacy() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-2">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={8}>
          <Typography align="left" variant="h3" className={classes.heading}>
            What data do we collect:
          </Typography>
          <Typography align="left" variant="h4" className={classes.subhead}>
            <ol className={classes.englishNumbers}>
                  <li>Data collected during sign up including phone number.</li>
                  <li>Data collected during application use.</li>
            </ol>
          </Typography>

          <Typography align="left" variant="h3" className={classes.heading}>
            How do we use data:
          </Typography>
          <Typography align="left" variant="h4" className={classes.subhead}>
            <p>Ronda tries to enhance your experience. We also use these data to:</p>
            <ol className={classes.englishNumbers}>
              <li>Enhancing the safety and security of our services.</li>
              <li>For customer services.</li>
              <li>For research and development.</li>
              <li>For marketing and communication and non-marketing purposes.</li>
            </ol>
            <p>Ronda does not sell or give access to your information to third-party companies or other companies.</p>
          </Typography>
          <Typography align="left" variant="h3" className={classes.heading}>
            Purpose of data collection:
          </Typography>
          <Typography align="left" variant="h4" className={classes.subhead}>
            <ul>
              <li>Development of services and features.</li>
              <li>Creation and updating account.</li>
              <li>Enabling transportation and delivery and other services.</li>
              <li>Offer and payment optimization and other services.</li>
            </ul>
          </Typography>

        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 600,
    color: "#5d5d5d",
    fontSize: 30,
    marginTop:40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 26,
    },
  },
  subhead: {
    color: "#989898",
    marginTop: theme.spacing(4),
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  section1: {
    backgroundImage: "url(/images/section2_back.svg),url(/images/path.svg)",
    backgroundSize: "525px 825px,auto",
    direction: "ltr",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left -195px,bottom 650px right -450px",
    minHeight: "100vh",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      paddingLeft: theme.spacing(3),
    },
  },
  gridContainer: {
    justifyContent: "flex-end",
  },
  englishNumbers:{
    fontFamily:"Vazir"
  }
}));

export default EnPrivacy;
