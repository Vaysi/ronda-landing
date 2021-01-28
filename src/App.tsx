import { ThemeProvider as MaterialUiProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import theme from "./themes/light";
import "vazir-font/dist/Farsi-Digits/font-face-FD.css";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Scrollspy from "react-scrollspy";
import DownloadSection from "./components/download-section";
import FirstSection from "./components/first-section";
import ThirdSection from "./components/third-section";
import FourthSection from "./components/fourth-section";
import FifthSection from "./components/fifth-section";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function App() {
  const classes = useStyles();
  return (
    <MaterialUiProvider theme={theme}>
      <StylesProvider injectFirst>
        <div className={classes.wrapper}>
          <div>
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
      </StylesProvider>
    </MaterialUiProvider>
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

export default App;
