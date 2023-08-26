import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function SpiderDiagramComponent({ component, elRef }) {

  const {classList, display, style, width, height, labels, datasets, minValue, maxValue, stepSize} = component;

  const styles = { ...style, width, height };

  const data = { 
    labels: labels,
    datasets: datasets,
    };
  
  // Define the chart options
  const options = {
    scale: {
      z: '1',
    },
    scales: {
      r: {
        ticks: { 
          beginAtZero: true, 
          backdropColor: 'rgba(255,255,255,0.7)', 
          backdropPadding: '6',
          font: { family: '\'Barlow\', sans-serif', },
        },
        angleLines: { color: 'rgba(0,0,0,0.4)', },
        pointLabels: { font: { family: '\'Barlow\', sans-serif', size: '16px', weight: '300', }, },
        grid: { color: 'rgba(0,0,0,0.4)', },
        suggestedMin: minValue,
        suggestedMax: maxValue,
        stepSize: stepSize,
      },
    },
    plugins: {
      legend: {
        labels: {
          filter: item => item.text !== 'hidden',
          font: { family: '\'Barlow\', sans-serif', size: '16px', weight: '300', },
          display: true,
          position: 'top',
      align: 'end',
        },
      },
      tooltip: {
        bodyFont: { font: { family: '\'Barlow\', sans-serif', size: '16px', weight: '300', }, },
      },
    },
  };

  if (!display) {
    return null;
  }

  return (
    <div ref={ elRef } style={ styles } className={ classList } >
     { data.datasets ? <Radar data={ data } options={ options } /> : ""}
    </div>
  );
};