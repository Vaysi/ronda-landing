import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

function FourthSection() {
  const classes = useStyles();
  return (
    <div className={classes.section3} id="section-4">
      <div className={classes.gridWrapper}>
        <Grid xs={12} md={8} container spacing={0}>
          <Typography align="right" variant="h3" className={classes.heading}>
            درباره روندا
          </Typography>
          <Typography align="justify" className={classes.subhead}>
            روندا اپلیکیشن کاملا بومی اهواز مخصوص سفارش از رستوران، سوپرمارکت و
            میوه است. در حال حاضر روندا مجهز به انباری بزرگ در منطقه کیان‌آباد
            است که سفارشات سوپرمارکتی و میوه شما را در اسرع وقت بدستتان خواهد
            رساند. روندا با بیش از ۲۰۰ رستوران آماده به سفارش در اپلیکیشن خود،
            بزرگ‌ترین سامانه سفارش غذا را برای اهوازی‌ها به ارمغان آورده است.
          </Typography>
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 800,
    color: "#5d5d5d",
    fontSize: 42,
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
      marginTop: theme.spacing(4),
    },
  },
  subhead: {
    color: "#989898",
    marginTop: theme.spacing(6),
    fontSize: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  section3: {
    backgroundImage: "url(/images/stay.png),url(/images/section4.svg)",
    backgroundSize: "auto 430px,auto 530px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center,center left -240px",
    minHeight: "100vh",
    paddingRight: theme.spacing(8),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
      backgroundImage: "none",
    },
  },
  gridWrapper: {
    justifyContent: "flex-start",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

export default FourthSection;
