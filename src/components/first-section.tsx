import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Language, PhoneAndroid } from "@material-ui/icons";
import { getPwaUrl } from "../helpers/common";

function FirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-1">
      <img src="/images/logo.png" alt="روندا" className={classes.logo} />
      <Typography variant="h2" className={classes.heading}>
        سفارش غذا و <br />
        هایپرمارکت آنلاین روندا
      </Typography>
      <Typography variant="h4" className={classes.subhead}>
        روندا همیشه، همه جا، با شما
      </Typography>
      <div className={classes.buttonWraper}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<Language className={classes.buttonIcon} />}
          className={classes.button}
          onClick={() => {
            window.location.assign(getPwaUrl());
          }}
        >
          ورود به وب اپلیکیشن
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<PhoneAndroid className={classes.buttonIcon} />}
          className={classes.button}
        >
          دریافت اپلیکیشن
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 700,
    fontSize: 42,
    color: "#5d5d5d",
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      marginTop: theme.spacing(8)
    },
  },
  section1: {
    backgroundImage: "url(/images/section1.svg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(20),
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "top center",
    },
  },
  buttonWraper: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1)
    },
  },
  logo: {
    position: "absolute",
    right: 50,
    top: 30,
    height: 100,
    width: 100,
  },
  subhead: {
    color: "#989898",
    fontWeight: 400,
    marginTop: theme.spacing(5),
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginTop: theme.spacing(2)
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(6),
    fontSize: 25,
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginTop: theme.spacing(4),
      fontSize: 25
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
  },
  buttonIcon: {
    fontSize: `30px!important`,
    [theme.breakpoints.down('xs')]: {
      fontSize: `20px!important`,
    },
  },
}));

export default FirstSection;
