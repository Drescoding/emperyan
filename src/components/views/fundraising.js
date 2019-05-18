import React, { Component } from "react";
import Navigation from '../Navigation.js';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

export default class Fundraising extends Component {
  render() {
    return (
      <div className="content" onScrollCapture>
        <Navigation />
        <h1>Fundraising</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            style={{ parent: { maxWidth: "55%" } }}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={["2014", "2015", "2016", "2017","2018"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 1000000}M`)}
            />
            <VictoryBar
              data={data}
              x="year"
              y="earnings"
            />
          </VictoryChart>
          <div>The following is placeholder text known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Vivamus a ante congue, porta nunc nec, hendrerit turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Integer tempus, elit in laoreet posuere, lectus neque blandit dui, et placerat urna diam mattis orci.</div>
          </div>
      </div>
    );
  }
}
const data = [
  { year: 1, earnings: 3250000 },
  { year: 2, earnings: 7650000 },
  { year: 3, earnings: 21225000 },
  { year: 4, earnings: 29875000 },
  { year: 5, earnings: 48273000 }
];