import React, { Component } from "react";
import * as papa from "papaparse";

import { Tabs, Modal, Spin, Table, Button } from "antd";
const width = 1200;

export class TabbedTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      pagination: 0,
      rowsPerPage: 5
    };
    this.props.fetchTableData(this.props.tables[this.state.tab].fileName);
  }

  parseTable(tableData) {
    console.log(tableData);
    return papa.parse(tableData);
  }

  componentDidUpdate() {
    console.log("Updated", this.props.tables);
  }

  renderTable() {
    console.log("render", this.props.tables[this.state.tab]);
    const table = this.parseTable(this.props.tables[this.state.tab].data).data;
    const columns = table[0].slice(1).map(c => ({
      title: c,
      dataIndex: c,
      key: c,
      width: 1000
    }));
    const dataSource = table.slice(1).map((r, i, self) => {
      const row = {};
      for (let j = 0; j < columns.length; j++) {
        row[columns[j].key] = r[j + 1];
      }
      return row;
    });

    console.log("Columns", columns);
    console.log("Rows", dataSource);

    return <Table columns={columns} dataSource={dataSource} size="small" />;
  }

  render() {
    return (
      <div>
        <Modal
          visible
          onCancel={this.props.handleClose}
          footer={null}
          bodyStyle={{ padding: 0, paddingTop: 15, paddingBottom: 15 }}
          width={width}
        >
          <div
            style={{
              padding: 0,
              backgroundColor: "#fff"
            }}
          >
            <Tabs
              value={this.state.tab}
              onChange={value => {
                console.log("Tab", value);
                console.log(this.props.tables[value]);
                // if the data for this tab is not available, fetch it
                this.props.tables[value].data ||
                  this.props.fetchTableData(this.props.tables[value].fileName);

                this.setState({ tab: +value });
              }}
              tabBarExtraContent={
                this.props.tables[this.state.tab].data && (
                  <Button
                    ghost
                    type="primary"
                    icon="download"
                    style={{ marginRight: 60 }}
                    size="small"
                    onClick={() =>
                      this.props.downloadCSVFile(
                        this.props.tables[this.state.tab].fileName
                      )
                    }
                  >
                    {`Download ${
                      this.props.tables[this.state.tab].displayName
                    } data`}
                  </Button>
                )
              }
            >
              {this.props.tables.map((t, i) => (
                <Tabs.TabPane
                  style={{ position: "relative" }}
                  key={i}
                  tab={t.displayName}
                >
                  {i === this.state.tab && t.data ? (
                    <div>{this.renderTable()} </div>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        paddingTop: 30
                      }}
                    >
                      <span style={{ marginBottom: 30 }}>
                        <Spin style={{ marginRight: 15 }} />
                        Fetching table content ...
                      </span>
                    </div>
                  )}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </Modal>
      </div>
    );
  }
}
