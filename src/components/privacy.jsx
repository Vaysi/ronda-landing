import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

function Privacy() {
  const classes = useStyles();
  return (
    <div className={classes.section1} id="section-2">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={8}>
          <Typography align="right" variant="h3" className={classes.heading}>
            اطلاعاتی که ما جمع‌آوری می‌کنیم:
          </Typography>
          <Typography align="right" variant="h4" className={classes.subhead}>
            <ol>
                  <li>اطلاعاتی که هنگام ساخت حساب کاربری از شما دریافت می‌کنیم که شامل اطلاعات تماس است.</li>
                  <li>اطلاعاتی که موقع استفاده از برنامه جمع‌آوری می‌کنیم.</li>
            </ol>
          </Typography>

          <Typography align="right" variant="h3" className={classes.heading}>
            نحوه‌ی استفاده از اطلاعات:
          </Typography>
          <Typography align="right" variant="h4" className={classes.subhead}>
            <p>روندا برای بهتر شدن تجربه‌ی شما از اطلاعات استفاده می‌کند. ما هم‌چنین اطلاعات را استفاده می‌کنیم برای:</p>
            <ol>
              <li>بهینه‌سازی امنیت سرویس‌ها</li>
              <li>برای پشتیبانی مشتریان</li>
              <li>برای تحقیق و توسعه</li>
              <li>برای مارکتینگ و ارتباطات غیر مارکتینگ</li>
            </ol>
            <p>روندا اطلاعات شخصی افراد را در اختیار شرکت‌های همکار و هم‌چنین به شرکت‌های غیر نمی‌گذارد.</p>
          </Typography>
          <Typography align="right" variant="h3" className={classes.heading}>
            هدف روندا از جمع‌اوری اطلاعات:
          </Typography>
          <Typography align="right" variant="h4" className={classes.subhead}>
            <p>روندا برای بهتر شدن تجربه‌ی شما از اطلاعات استفاده می‌کند. ما هم‌چنین اطلاعات را استفاده می‌کنیم برای:</p>
            <ul>
              <li>توسعه‌ی خدمات و ویژگی‌ها</li>
              <li>ساخت و بروز رسانی حساب کاربری</li>
              <li>فعال‌سازی حمل و نقل، پخش و سایر خدمات</li>
              <li>ایجاد کد تخفیف و تسهیل پرداخت و سایر خدمات</li>
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

export default Privacy;
