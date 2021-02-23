import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import FirstSection from "./first-section";
import DownloadSection from "./download-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import Scrollspy from "react-scrollspy";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {StylesProvider} from "@material-ui/styles";

function Privacy() {
    const classes = useStyles();
    return (
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

export default Privacy;
