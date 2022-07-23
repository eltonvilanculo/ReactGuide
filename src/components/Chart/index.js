import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
    const values = props.dataPoints.map(dataPoint=>dataPoint.value);
    //Still an array but we nee a paramas max(1,2,2) so we use spread instead
    const totalMaximum  = Math.max(...values);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
        )
      )}
    </div>
  );
}
