import React, { useState, useEffect } from "react";
import {Button, Alert, Spin, Input } from 'antd';
import { parse, distanceInWordsToNow } from "date-fns";
import { TabbedTables } from "./tabbed-tables";
import { Visualizer } from "./visualizer";
import {
  SERVER_ADDRESS,
  AnnotationStatus,
  getParameterValueFromURL,
  downloadSchemeFile,
  fetchAnnotationStatus,
  getSession
} from "../utility";
import logo from "../assets/mozi_globe.png";
import "antd/dist/antd.css";
import "../style.css";


export function AnnotationResult(props) {
  const [response, setResponse] = useState(undefined);
  const [isVisualizationShown, setVisualizationShown] = useState(false);
  const [isTableShown, setTableShown] = useState(false);
  const [isFetchingResult, setFetchingResult] = useState(false);
  const { ACTIVE, COMPLETED, ERROR } = AnnotationStatus;

  useEffect(() => {
    const id = getParameterValueFromURL("id");
    if (id) {
      setFetchingResult(true);
      fetchAnnotationStatus(id).then(response => {
        setFetchingResult(false);
        console.log('Response', response);
        setResponse(response);
      });
    }
  }, []);

  const fetchTableData = fileName => {
    fetch(`${SERVER_ADDRESS}/csv_file/${fileName}`).then(data => {
      const res = Object.assign({}, response);
      data
        .clone()
        .text()
        .then(text => {
          res.csv_files.find(f => f.fileName === fileName).data = text;
          setResponse(res);
        });
    });
  };

  const renderHeader = () => (
    <div className="header">
      <img src={logo} className="logo" />
      <h1 className="title">Gene annotation result</h1>
    </div>
  );

  const renderActive = () => (
    <Alert
      type="info"
      className="compact-alert"
      message="The annotation task is still processing, please comeback later"
      showIcon
    />
  );

  const renderError = () => (
    <Alert
      type="error"
      className="compact-alert"
      message={response.statusMessage}
      showIcon
    />
  );

  const renderComplete = () => {
    const { nodes, edges } = response.result;
    return (
      <React.Fragment>
        <p>
          The result contains {nodes.length} entities and {edges.length}{" "}
          connections between them.
          <br />
          This page will expire in{" "}
          {distanceInWordsToNow(parse(response.expire_time * 1000))}.
        </p>
        <div className="inline-buttons">
          <Button onClick={e => setTableShown(true)}>View results table</Button>
          <Button onClick={downloadSchemeFile}>Download Scheme File</Button>
          <Button type="primary" onClick={e => setVisualizationShown(true)}>
            Visualize the result
          </Button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="content-wrapper">
      {/* Logo and title */}
      <div className="landing-page">
        {renderHeader()}
        {response && response.status === COMPLETED && renderComplete()}
        {response && response.status === ACTIVE && renderActive()}
        {response && response.status === ERROR && renderError()}
        {/* If an ID is not specified, display a text input */}
        {!getParameterValueFromURL("id") && (
          <Input.Search
            className="search-input"
            placeholder="Input Session Id"
            enterButton="Go"
            size="large"
            onSearch={getSession}
          />
        )}
        {/* Show loader if there is a request being processed */}
        {isFetchingResult && (
          <div className="spin-wrapper">
            <Spin /> Fetching results ...
          </div>
        )}
      </div>
      {/* Show the visualizer */}
      {isVisualizationShown && (
        <Visualizer
          graph={response.result}
          back={() => setVisualizationShown(false)}
          annotations={response.result.nodes.reduce((acc, n) =>
             [...acc, ...n.data.group, n.data.subgroup ]
        , []).filter((a,i,self) => a && self.indexOf(a)===i)}
        />
      )}
      {/* Show annotations tables */}
      {isTableShown && (
        <TabbedTables
          tables={response.csv_files}
          fetchTableData={fetchTableData}
          handleClose={() => setTableShown(false)}
        />
      )}
    </div>
  );
}
