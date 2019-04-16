import React, { Fragment } from "react";
const cytoscape = require("cytoscape");
const cola = require("cytoscape-cola");
import { Button, Tooltip, Collapse, Checkbox, Progress } from "antd";

const AnnotationColorsLight = [
  "#c2ddf0",
  "#d2cfe2",
  "#e6e2cb",
  "#E0D0E3",
  "#C1CEE8",
  "#C8DECC"
];
const AnnotationColorsDark = [
  "#70b1dc",
  "#776fa9",
  "#b6a863",
  "#a06fa9",
  "#587bc1",
  "#70a97a"
];

export const CYTOSCAPE_COLA_CONFIG = {
  name: "cola",
  animate: true,
  maxSimulationTime: 3000,
  ungrabifyWhileSimulating: true,
  fit: true,
  padding: 10,
  randomize: true,
  avoidOverlap: true,
  handleDisconnected: true,
  nodeSpacing: 20,
  infinite: false
};

export const CYTOSCAPE_STYLE = [
  {
    selector: "node",
    css: {
      shape: "round-rectangle",
      width: "mapData(id.length, 0, 20, 50, 300)",
      height: "40",
      content: "data(id)",
      color: "#fff",
      "text-wrap": "wrap",
      "text-max-width": "350px",
      "text-valign": "center",
      "text-halign": "center",
      "background-color": "#565656",
      "text-outline-color": "#565656",
      "text-outline-width": 1
    }
  },
  {
    selector: 'node[group="biogrid_interaction_annotation"]',
    css: {
      shape: "ellipse",
      width: 75,
      height: 75
    }
  },
  {
    selector: 'node[id^="Uni"]',
    css: {
      shape: "hexagon"
    }
  },
  {
    selector: 'node[id^="ChEBI"]',
    css: {
      shape: "diamond",
      height: 75
    }
  },
  {
    selector: "node:selected",
    css: {
      "border-width": 5,
      "border-color": "#AAD8FF",
      "border-opacity": 1
    }
  },
  {
    selector: 'node[group="Gene"]',
    style: {
      shape: "ellipse",
      content: "data(id)",
      height: 75,
      color: "#fff",
      "text-outline-color": "#005bcd",
      "background-color": "#005bcd"
    }
  },
  {
    selector: 'node[group="main"]',
    style: {
      shape: "ellipse",
      content: "data(id)",
      width: 75,
      height: 75,
      color: "#fff",
      "background-color": "#005bcd",
      "text-outline-color": "#005bcd"
    }
  },
  {
    selector: "edge",
    css: {
      "curve-style": "haystack",
      "line-color": "#ccc",
      width: 4
    }
  },
  {
    selector: "edge[group='gene_go_annotation']",
    css: {
      "curve-style": "straight",
      "target-arrow-shape": "triangle",
      "target-arrow-fill": "filled"
    }
  }
];

export class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNode: { node: null, position: null },
      history: []
    };
    this.cy_wrapper = React.createRef();
    cytoscape.use(cola);
  }

  randomLayout() {
    this.layout = this.cy.layout(CYTOSCAPE_COLA_CONFIG);
    this.layout.run();
  }

  breadthFirstLayout() {
    if (this.layout) this.layout.stop();
    this.layout = this.cy.layout({ name: "breadthfirst" });
    this.layout.run();
  }

  takeScreenshot() {
    const image = this.cy.jpg();
    const link = document.createElement("a");
    link.setAttribute("href", image);
    link.setAttribute("download", "mozi-graph.jpg");
    link.click();
  }

  componentDidMount() {
    this.cy = cytoscape({
      container: this.cy_wrapper.current,
      hideEdgesOnViewport: true
    });
    this.cy.add(
      this.props.graph.nodes.filter(n => n.data.group === "main" && n.data.id)
    );
    this.toggleAnnotationVisibility(this.props.annotations[0], true);
    this.cy.style(CYTOSCAPE_STYLE.concat(this.assignColorToAnnotations()));
    this.registerEventListeners();
    this.randomLayout();
  }

  registerEventListeners() {
    this.cy.nodes().on(
      "mouseover",
      function(event) {
        this.setState({
          selectedNode: {
            node: event.target.data(),
            position: event.renderedPosition
          }
        });
      }.bind(this)
    );
    this.cy.nodes().on(
      "select",
      function(event) {
        this.focusOnNode(event.target.data().id);
      }.bind(this)
    );
    this.cy.nodes().on(
      "mouseout",
      function(event) {
        this.setState({ selectedNode: { node: null, position: null } });
      }.bind(this)
    );
    this.cy.nodes().on(
      "unselect",
      function(event) {
        this.removeFocus();
      }.bind(this)
    );
  }

  removeFocus() {
    this.cy.batch(() => {
      this.cy.elements().style({ opacity: 1 });
    });
  }

  assignColorToAnnotations() {
    return this.props.annotations.reduce((acc, ann, i, arr) => {
      acc.push({
        selector: 'edge[group="' + ann + '"]',
        style: {
          "line-color": AnnotationColorsLight[i],
          "text-outline-color": AnnotationColorsLight[i],
          "target-arrow-color": AnnotationColorsDark[i]
        }
      });
      acc.push({
        selector: 'node[group="' + ann + '"]',
        style: {
          "background-color": AnnotationColorsDark[i],
          color: "#fff",
          "text-outline-width": 2,
          "text-outline-color": AnnotationColorsDark[i]
        }
      });
      return acc;
    }, []);
  }

  focusOnNode(id) {
    const hood = this.cy.getElementById(id).closedNeighborhood();
    this.cy.fit(hood);
    this.cy.batch(() => {
      this.cy
        .elements()
        .difference(hood)
        .style({ opacity: 0.1 });
    });
  }

  downloadGraphJSON() {
    const json = `data:text/json;charset=utf-8, ${encodeURIComponent(
      JSON.stringify(this.props.graph)
    )}`;
    const link = document.createElement("a");
    link.setAttribute("href", json);
    link.setAttribute("download", "annotation-graph.json");
    link.click();
  }

  toggleAnnotationVisibility(annotation, show) {
    show
      ? this.cy.batch(() => {
          this.cy.add(
            this.props.graph.nodes.filter(
              e => e.data.group === annotation && e.data.id
            )
          );
          this.cy.add(
            this.props.graph.edges.filter(
              e => e.data.group === annotation && e.data.source && e.data.target
            )
          );
        })
      : this.cy.remove(`[group='${annotation}']`);
    this.randomLayout();
    this.registerEventListeners();
  }

  annotationPercentage(annotation) {
    return (
      (100 *
        this.props.graph.edges.filter(e => e.data.group === annotation)
          .length) /
      this.props.graph.edges.length
    );
  }

  formatDescription(description) {
    if (
      description.indexOf("https://") > -1 ||
      description.indexOf("http://") > -1
    ) {
      return (
        <a href={description} rel="noopener noreferrer" target="_blank">
          Learn more
        </a>
      );
    }
    return description;
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "5px",
            top: 15,
            left: 15,
            opacity: 0.9,
            zIndex: 2
          }}
        >
          <Tooltip placement="right" title="Go back">
            <Button
              size="large"
              style={{ border: "none" }}
              icon="arrow-left"
              onClick={e => this.props.back()}
            />
          </Tooltip>
          <Tooltip placement="right" title="Randomize layout">
            <Button
              size="large"
              style={{ border: "none" }}
              icon="swap"
              onClick={e => this.randomLayout()}
            />
          </Tooltip>
          <Tooltip placement="right" title="Breadth-first layout">
            <Button
              size="large"
              style={{ border: "none" }}
              icon="gold"
              onClick={e => this.breadthFirstLayout()}
            />
          </Tooltip>
          <Tooltip placement="right" title="Save screenshot">
            <Button
              size="large"
              style={{ border: "none" }}
              icon="camera"
              onClick={e => this.takeScreenshot()}
              style={{ border: "none" }}
            />
          </Tooltip>
          <Tooltip placement="right" title="Download scheme file">
            <Button
              size="large"
              style={{ border: "none" }}
              icon="file-text"
              onClick={this.props.downloadSchemeFile}
            />
          </Tooltip>
          <Tooltip placement="right" title="Download graph as JSON">
            <Button
              size="large"
              style={{ border: "none" }}
              icon="share-alt"
              onClick={e => this.downloadGraphJSON()}
            />
          </Tooltip>
          <Tooltip
            placement="right"
            title={
              <div>
                <p>
                  Use the checkboxes to the right to filter the graph by
                  annotations.
                </p>
                <p>Click on a gene node to see annotations connected to it.</p>
                <p>Click on an annotation to see which genes it annotates.</p>
              </div>
            }
          >
            <Button
              size="large"
              icon="info-circle"
              style={{ border: "none" }}
            />
          </Tooltip>
        </div>

        <div
          style={{
            height: "100vh",
            width: "100vw"
          }}
          ref={this.cy_wrapper}
        />
        <div
          xs={10}
          sm={4}
          md={3}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            zIndex: 2,
            opacity: 0.9
          }}
        >
          <Collapse bordered={false} style={{ width: 300 }}>
            <Collapse.Panel
              header="Annotations"
              key="annotation"
              style={{ border: "none" }}
            >
              {this.props.annotations.map((a, i) => (
                <React.Fragment key={a}>
                  <Checkbox
                    checked={i === 0}
                    name={a.key}
                    onChange={e =>
                      this.toggleAnnotationVisibility(a, e.target.checked)
                    }
                    style={{ marginRight: 10 }}
                  />
                  {a}
                  <Progress
                    percent={this.annotationPercentage(a)}
                    strokeColor={AnnotationColorsDark[i]}
                    showInfo={false}
                  />
                </React.Fragment>
              ))}
            </Collapse.Panel>
          </Collapse>
        </div>
        {this.state.selectedNode.node && (
          <div
            style={{
              position: "absolute",
              bottom: 15,
              left: 15,
              width: "350px",
              backgroundColor: "#c9e1f9",
              border: "solid 1px #87BEF5",
              padding: "5px",
              borderRadius: "3px"
            }}
          >
            <h4>{`${this.state.selectedNode.node.name} ( ${
              this.state.selectedNode.node.id
            } )`}</h4>
            <p>
              {this.formatDescription(this.state.selectedNode.node.definition)}
            </p>
          </div>
        )}
      </Fragment>
    );
  }
}
