import { makeStyles, Theme } from "@material-ui/core/styles";
import FirstSection from "./first-section";
import DownloadSection from "./download-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import Scrollspy from "react-scrollspy";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogTitle,
  Fade,
  Typography,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Home() {
  const classes = useStyles();
  const query = useQuery();
  const [welcomeModal, setWelcomeModal] = useState<boolean>(false);


  useEffect(function () {
    if (query.get("refer") == "ghormeh") {
      setWelcomeModal(true);
    }
  }, []);
  return (
    <div className={classes.wrapper}>
      <div>
        <Dialog
          onClose={() => {
            setWelcomeModal(false);
          }}
          open={welcomeModal}
        >
          <DialogTitle id="simple-dialog-title">به <b>روندا</b> خوش‌ آمدی</DialogTitle>
          <Fade in={welcomeModal}>
            <Card variant="outlined">
              <CardContent>
                <Typography>
                  دوست قدیمی قورمه ، از این به بعد <b>روندا</b> صدامون کن
                  <br />
                  ۲۵ هزارتومان هدیه ، ویژه اولین سفارش از هایپرمارکت <b>روندا</b> با کد
                  HiRONDA
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    setWelcomeModal(false);
                  }}
                >
                  بستن
                </Button>
              </CardActions>
            </Card>
          </Fade>
        </Dialog>
        <FirstSection />
        <DownloadSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Scrollspy
          items={["section-1", "section-2", "section-3", "section-4"]}
          currentClassName={classes.isCurrent}
          className={classes.indicator}
        >
          <li>
            <a href="#section-1">
              <FiberManualRecordIcon className={classes.indicatorIcon} />
            </a>
          </li>
          <li>
            <a href="#section-2">
              <FiberManualRecordIcon className={classes.indicatorIcon} />
            </a>
          </li>
          <li>
            <a href="#section-3">
              <FiberManualRecordIcon className={classes.indicatorIcon} />
            </a>
          </li>
          <li>
            <a href="#section-4">
              <FiberManualRecordIcon className={classes.indicatorIcon} />
            </a>
          </li>
        </Scrollspy>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: "relative",
    height: "100vh",
  },
  indicator: {
    position: "fixed",
    top: "50%",
    right: theme.spacing(2),
    transform: "translate(auto, -50%)",
    padding: 0,
    width: "fit-content",
    height: "fit-content",
    margin: 0,
    "& li": {
      listStyle: "none",
      marginBottom: 5,
      "& a": {
        color: "#e2e2e2",
      },
    },
  },
  isCurrent: {
    "& a": {
      color: "#ff5821!important",
    },
  },
  indicatorIcon: {},
}));

export default Home;
