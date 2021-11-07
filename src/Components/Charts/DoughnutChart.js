import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './doughnut.scss';
import { useSelector } from 'react-redux';
import { selectValue } from '../../Store/variables';

export default function DoughnutChart() {
  const values = useSelector(selectValue);
  let set1 = values.base_val;
  let set2 = values.mul_1;
  let set3 = values.mul_2;
  const data = {
    labels: ['Base Val', 'Mul 1', 'Mul 2'],
    datasets: [
      {
        label: '# of Votes',
        data: [set1, set2, set3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 206, 86, 0.9)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 206, 86, 0.9)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="daughnut-outer">
      <h2>Result Chart</h2>
      <Doughnut data={data} />
    </div>
  );
}
