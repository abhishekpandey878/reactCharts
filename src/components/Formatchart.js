import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class Formatters extends React.Component {
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={"800px"}
          height={"500px"}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            ["Department", "C"],
            ["Shoes", { v: 12, f: "12.0%" }],
            ["Sports", { v: -7.3, f: "-7.3%" }],
            ["Toys", { v: 0, f: "0%" }],
            ["Electronics", { v: -2.1, f: "-2.1%" }],
            ["Food", { v: 22, f: "22.0%" }],
          ]}
          formatters={[
            {
              type: "ArrowFormat",
              column: 1,
            },
          ]}
          options={{
            allowHtml: true,
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default Formatters;
