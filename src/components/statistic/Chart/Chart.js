import React from 'react';
import './Chart.scss';
import { Doughnut } from 'react-chartjs-2';

export default function Chart() {
  return (
    <div>
      <div className="chart">
        <Doughnut
          className="chart__contents"
          data={{
            datasets: [
              {
                data: [20, 50, 100, 250, 500, 25, 36, 48, 1000],
                backgroundColor: [
                  '#FED057',
                  '#FFD8D0',
                  '#FD9498',
                  '#C5BAFF',
                  '#6E78E8',
                  '#4A56E2',
                  '#81E1FF',
                  '#24CCA7',
                  '#00AD84',
                ],
                borderColor: [
                  '#FED057',
                  '#FFD8D0',
                  '#FD9498',
                  '#C5BAFF',
                  '#6E78E8',
                  '#4A56E2',
                  '#81E1FF',
                  '#24CCA7',
                  '#00AD84',
                ],
                borderWidth: 1,
                hoverOffset: 4,
              },
            ],
          }}
        />
        <span className="chart__ballance">&#8372; {24000}</span>
      </div>
    </div>
  );
}
