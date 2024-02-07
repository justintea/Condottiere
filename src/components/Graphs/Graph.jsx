import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ labels, values, color, goals, goalTarget }) {
  // console.log(values);
  // console.log(goals);
  // console.log(goalTarget);
  const datasets = [
    {
      label: "Total",
      data: values,
      borderColor: color,
      backgroundColor: color + "55",
    },
  ];

  const goalColour = "#E5C25B"

  if (goals && goalTarget) {
    for (const goal in goals) {
      datasets.push({
        label: goal + ": Current Amount",
        data: labels.map((label) => {
          for (const log of goals[goal]) {
            if (log.date === label) {
              return log.amount;
            }
          }
          return null;
        }),
        borderColor: goalColour,
        backgroundColor: goalColour + "55",
      });
    }
    for (const goal in goalTarget) {
      datasets.push({
        label: goal + ": Target Amount",
        data: labels.map((label) => {
          for (const log of goalTarget[goal]) {
            if (log.date === label) {
              return log.amount;
            }
          }
          return null;
        }),
        borderColor: goalColour,
        backgroundColor: goalColour + "55",
        borderDash: [10, 10],
      });
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
        text: "Overview",
      },
    },
  };

  const data = {
    labels,
    datasets,
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
