import React from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import Label from "./components/AxisLabel";
import ChartTitle from "./components/ChartTitle";

const data = [
  { label: "0", x: 0, y: 0.1 },
  { label: "5", x: 5, y: 0.7 },
  { label: "10", x: 10, y: 0.1 },
  { label: "15", x: 15, y: 0.7 },
  { label: "20", x: 20, y: 0.1 }
];

const styles = {
  chartComponentsContainer: {
    display: 'grid', gridTemplateColumns: 'max-content 700px', alignItems: 'center'
  },
  chartWrapper: { maxWidth: 700, alignSelf: 'flex-start' }
}

function App() {
  return (
    <div style={styles.chartComponentsContainer}>
      <div/>
      <ChartTitle text="Breathing Flow Signal"/>
      <Label text="Flow L·s^-1" rotate/>
      <div style={styles.chartWrapper}>
        <LineChart
        width={500}
          height={300}
          data={data}
          horizontalGuides={5}
          precision={2}
          verticalGuides={1}
        />
      </div>
      <div/>
      <Label text="Time s"/>
    </div>
  );
}

export default App;
