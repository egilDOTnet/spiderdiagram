import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "./lib/chart.js";
import { Radar } from "./lib/react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function SpiderDiagramComponent({ component, elRef }) {
  const {
    classList,
    display,
    style,
    width,
    height,
    labels,
    datasets,
    minValue,
    maxValue,
    stepSize,
  } = component;

  const styles = { ...style, width, height };

  const data = {
    labels: labels,
    datasets: datasets,
  };

  // Define the chart options
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: minValue,
        suggestedMax: maxValue,
        stepSize: stepSize,
      },
    },
  };

  console.log("Labels: ", labels);
  console.log("Datasets: ", datasets);

  if (!display) {
    return null;
  }

  return (
    <div ref={elRef} style={styles} className={classList}>
      {data.datasets ? (
        <Radar
          data={data}
          options={options}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
