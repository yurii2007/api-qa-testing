"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { selectResult } from "@/redux/selectors";

ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = () => {
  const correctAnswers = useSelector(selectResult) ?? -1;

  if (correctAnswers < 0) return null;

  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "",
        data: [correctAnswers, 12 - correctAnswers],
        backgroundColor: ["#FF6B09", "#D7D7D7"],
        borderWidth: 0,
        hoverOffset: 1,
        cutout: "0%",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className="mt-5 md:mt-10 w-[156px] md:w-[288px] h-[156px] md:h-[288px] mx-auto">
      <Pie data={data} options={options} />
    </section>
  );
};

export default Donut;
