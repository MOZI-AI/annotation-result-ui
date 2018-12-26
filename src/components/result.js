import React from "react";
import { Progress, Button, Icon, Alert, Collapse } from "antd";
import moment from "moment";
import { AnalysisStatus } from "../utils";

export const Result = props => {
  const {
    progress,
    status,
    start,
    end,
    message,
    downloadResult,
    expirationTime
  } = props;
  const progressBarProps = {
    percent: progress
  };
  if (status === AnalysisStatus.ACTIVE) {
    progressBarProps["status"] = "active";
  }

  const progressBar = <Progress {...progressBarProps} />;

  return (
    <React.Fragment>
      {status === AnalysisStatus.ACTIVE && (
        <span>
          Analysis started
          {" " + moment(start * 1000).fromNow()}
          {progressBar}
          <p style={{ marginTop: "15px" }}>
            The analysis might take a while depending on the size of the dataset
            and analysis parameter values.
          </p>
        </span>
      )}

      {status === AnalysisStatus.COMPLETED && (
        <span>
          Analysis completed after
          {" " + moment.duration(moment(end).diff(moment(start))).humanize()}
          {progressBar}
          {expirationTime ? (
            <React.Fragment>
              <Alert
                id="willExpireNotice"
                style={{ marginTop: "15px" }}
                type="warning"
                message={
                  "The download link will expire in " +
                  moment.duration(expirationTime, "seconds").humanize()
                }
                closable
                closeText="I know"
                description={
                  "You may download the analysis result file within " +
                  moment.duration(expirationTime, "seconds").humanize() +
                  ". The link will expire afterwards."
                }
              />
              <Button
                id="downloadAnalysisResult"
                type="primary"
                onClick={downloadResult}
                style={{ marginTop: "15px" }}
              >
                <Icon type="download" />
                Download analysis results
              </Button>
            </React.Fragment>
          ) : (
            <Alert
              id="didExpireNotice"
              style={{ marginTop: "15px" }}
              type="error"
              message="Link expired"
              description="You can no longer access analysis results"
            />
          )}
        </span>
      )}

      {status === AnalysisStatus.ERROR && (
        <Alert
          id="errorMessage"
          justify="left"
          type="error"
          message={
            "Analysis failed after " +
            moment.duration(moment(end).diff(moment(start))).humanize()
          }
          description={
            <Collapse
              bordered={false}
              style={{
                background: "none",
                boxShadow: "none",
                textAlign: "left"
              }}
            >
              <Collapse.Panel
                style={{ backgroundColor: "#f8d8d7" }}
                header="Show stacktrace"
                key="1"
              >
                {message}
              </Collapse.Panel>
            </Collapse>
          }
        />
      )}
    </React.Fragment>
  );
};
