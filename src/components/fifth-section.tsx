import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Divider, Grid, IconButton, Link, Typography } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

function FifthSection() {
  const classes = useStyles();
  return (
    <div className={classes.section5}>
      <Divider className={classes.divider} />
      <Grid xs={12} container className={classes.gridContainer}>
        <Grid className={classes.gridItem} xs={12} md={4} item>
          <img
            src="/images/logo_type_only.png"
            alt="روندا"
            className={classes.logoType}
          />
          <Grid container xs={12} className={classes.linksWrapper}>
            <Grid xs={6} item>
              <Link href="#" className={classes.link}>
                <Typography>دریافت اپلیکیشن</Typography>
              </Link>
            </Grid>
            <Grid xs={6} item>
              <Link href="#" className={classes.link}>
                <Typography>قوانین</Typography>
              </Link>
            </Grid>
            <Grid xs={6} item>
              <Link href="#" className={classes.link}>
                <Typography>تماس با پشتیبانی</Typography>
              </Link>
            </Grid>
            <Grid xs={6} item>
              <Link href="#" className={classes.link}>
                <Typography>درباره ما</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem} xs={12} md={4} item>
          <Typography align="center" variant="h6" className={classes.heading}>
            شبکه اجتماعی
          </Typography>
          <div className={classes.socialWrapper}>
            <IconButton className={classes.socialIcon} aria-label="linkedin">
              <LinkedIn />
            </IconButton>
            <IconButton className={classes.socialIcon} aria-label="facebook">
              <Facebook />
            </IconButton>
            <IconButton className={classes.socialIcon} aria-label="twitter">
              <Twitter />
            </IconButton>
            <IconButton className={classes.socialIcon} aria-label="instagram">
              <Instagram />
            </IconButton>
          </div>
        </Grid>
        <Grid className={classes.gridItem} xs={12} md={4} item>
          <Typography align="center" variant="h6" className={classes.heading}>
            مجوز ها
          </Typography>
          <div className={classes.socialWrapper}>
          <a target="_blank" href="https://trustseal.enamad.ir/?id=195650&amp;Code=MyWL9h8opAcMoC0tlQMD">
            <img
              src="/images/enamad.png"
              alt="نماد الکترونیک"
              className={classes.certificateImage}
              id="MyWL9h8opAcMoC0tlQMD"
            />
            </a>
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography align="center" className={classes.copyRight}>
        تمام حقوق مادی و معنوی سایت متعلق به روندا میباشد - 1399
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 800,
    color: "#5d5d5d",
    fontSize: 25,
  },
  gridContainer: {
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  gridItem: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
      textAlign: "center",
    },
  },
  subhead: {
    color: "#989898",
    marginTop: theme.spacing(8),
    fontSize: 25,
  },
  section5: {
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  logoType: {
    width: 75,
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
  },
  socialWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  socialIcon: {},
  linksWrapper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  link: {
    fontSize: 20,
    color: "#707070",
    display: "inline-block",
    transition: theme.transitions.create("color", {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  certificateImage: {
    height: 110,
    marginLeft: theme.spacing(1),
  },
  copyRight: {
    color: "#b2afaf",
    fontSize: 15,
    paddingBottom: theme.spacing(2),
  },
}));

export default FifthSection;
