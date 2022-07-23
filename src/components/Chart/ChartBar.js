import React from "react";
import './ChartBar.css'
export default function ChartBar({label,maxValue,value}) {
    let barHeight = '0%';


    if(maxValue>0){
        barHeight  =  Math.round((value/maxValue)*100)+"%"; 
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </div>
  );
}
