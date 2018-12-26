import React from "react";
import { Spin, Alert } from "antd";
import moment from "moment";

export const Loader = props => {
  return (
    <React.Fragment>
      <Spin style={{ marginRight: "15px" }} />{" "}
      <span> Fetching results ...</span>
    </React.Fragment>
  );
};
