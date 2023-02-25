import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: (context:any) => {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed !== null) {
                        console.log(context)
                        label += context.parsed + '₺' ;
                    }
                    return label;
                },
            },
        },
    },
};

export const data = {
    labels: ['Gelir', 'Gider'],
    datasets: [
        {
            label: 'Tutar',
            data: [19, 12],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1,
        },
    ],
};

export function DonutChart() {
    return <Doughnut data={data} options={options}/>;
}
