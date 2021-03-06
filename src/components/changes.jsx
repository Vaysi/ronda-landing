import { makeStyles, Theme } from "@material-ui/core/styles";
import {  Grid, Typography } from "@material-ui/core";

function Changes() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-2">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={8}>
          <Typography align="right" variant="h3" className={classes.heading}>
            لیست تغیرات :
          </Typography>
          <Typography align="right" variant="h4" className={classes.subhead}>
            <ol>
                  <li>تغیير نام برند به روندا</li>
                  <li>افزودن هایپر ماركت روندا</li>
                  <li>افزایش سرعت نرم افزار</li>
                  <li>برطرف سازی برخی ايرادات جزئی</li>
            </ol>
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
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right -135px,bottom -30px left -215px",
    minHeight: "100vh",
    // paddingRight: theme.spacing(1),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      paddingRight: theme.spacing(3),
    },
  },
  gridContainer: {
    justifyContent: "flex-end",
  },
}));

export default Changes;
