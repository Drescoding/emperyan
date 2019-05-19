import React, { Component } from "react";
import Navigation from '../Navigation.js';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

export default class Fundraising extends Component {
  render() {
    return (
      <div className="content" onScrollCapture>
        <Navigation />
        <div className="whiteBox">
          <h1>Fundraising</h1>
          <p>Lorem ipsum dolor sit amet, eripuit vituperata in pri. Graeci regione dolorem vel ut, id alia scaevola mea, vel errem graeci ea. At est mundi principes, an dicunt sententiae duo, eros dissentiunt in pro. Has an idque assum recteque, ei mandamus aliquando has, dolor fabulas torquatos eu vis. Hinc dolor eos ex, at similique moderatius has.</p>
          <p>Let us help you make the world a better place.</p>
        </div>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          style={{ parent: { maxWidth: "55%" } }}
          animate={{ duration: 500 }}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["2014", "2015", "2016", "2017", "2018"]}
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