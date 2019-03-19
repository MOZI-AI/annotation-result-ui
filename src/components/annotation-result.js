import React from "react";
import logo from "../assets/mozi_globe.png";
import { Button, Grid } from "@material-ui/core";
import { Visualizer } from "./visualizer";
import { parse, distanceInWordsToNow } from "date-fns";
import LinearProgress from "@material-ui/core/LinearProgress";


export const SERVER_ADDRESS = process.env.SERVICE_ADDR
  ? `http://${process.env.SERVICE_ADDR}:3200`
  : "http://localhost:3200";

export const AnnotationStatus = {
  ACTIVE: 1,
  COMPLETED: 2,
  ERROR: -1
};

const getQueryValue = variable => {
  const vars = window.location.search.substring(1).split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
};

const fetchAnnotationStatus = id => {
  return fetch(`${SERVER_ADDRESS}/result/${id}`).then(response =>
    response.json()
  );
};

export class AnnotationResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingResult: false,
      response: undefined,
      showVisualization: false
    };
    this.downloadSchemeFile = this.downloadSchemeFile.bind(this);
  }

  componentDidMount() {
    const id = getQueryValue("id");
    if (id) {
      this.setState({ fetchingResult: true });
      fetchAnnotationStatus(id).then(response => {
        this.setState({
          fetchingResult: false,
          response: response
        });
      });
    }
  }

  downloadSchemeFile() {
    window.open(
      `http://${SERVER_ADDRESS}:5000/result/${this.state.annotationId}`,
      "_blank"
    );
  }

  renderHeader() {
    return (
      <div style={{ marginTop: "20vh", marginBottom: 30 }}>
        <img src={logo} style={{ width: "100px", marginBottom: 0 }} />
        <h1 style={{ marginTop: 0 }}>Gene annotation result</h1>
      </div>
    );
  }

  renderComplete(response) {
    const graph = JSON.parse(response.result);
    return (
      <React.Fragment>
        <p>
          The result contains {graph.nodes.length} entities and{" "}
          {graph.edges.length} connections between them.
          <br />
          This page will expire in{" "}
          {distanceInWordsToNow(parse(response.expire_time))} .
        </p>
        <Button variant="contained" style={{ margin: 5 }}>
          Download Scheme File
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={e => this.setState({ showVisualization: true })}
        >
          Visualize the result
        </Button>
      </React.Fragment>
    );
  }

  renderActive() {
    return (
      <p>The annotation task is still processing, please comeback later.</p>
    );
  }

  renderError() {
    const id = getQueryValue("id");
    return (
      <div style={{ color: "maroon"}}>
        {id ? (
          this.state.response &&
          this.state.response.status === AnnotationStatus.ERROR ? (
            <p>
              An error occured while annotating the genes. You might have
              entered invalid gene names.
            </p>
          ) : this.state.fetchingResult ? null : (
            <p>
              There is no annotation session with the id <b>{id}</b>
            </p>
          )
        ) : (
          <p>Invalid URL</p>
        )}
      </div>
    );
  }

  render() {
    const response = this.state.response || {};
    return (
      <React.Fragment>
        <Grid container>
          <Grid item style={{ height: "100vh", width: "100vw" }}>
            {this.state.showVisualization && (
              <Visualizer
                graph={JSON.parse(response.result)}
                annotations={response.annotations.map(a => a.function_name)}
                back={() => this.setState({ showVisualization: false })}
              />
            )}
            {this.state.showVisualization || (
              <div style={{ width: "100%", textAlign: "center" }}>
                {this.renderHeader()}
                {response.status === AnnotationStatus.COMPLETED
                  ? this.renderComplete(response)
                  : response.status === AnnotationStatus.ACTIVE
                  ? this.renderActive()
                  : this.renderError()}
              </div>
            )}
            {/* Show loader if there is a request being processed */}
            {this.state.fetchingResult && (
              <div
                style={{
                  width: "100vw",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                Fetching results ...
                <LinearProgress  style={{ width: 300, marginTop: 5 }} />
              </div>
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
