'use client'
import React from "react"
import { AxisOptions } from "react-charts"
import { Chart } from "react-charts";

type DailyStars = {
    date: Date,
    stars: number,
    primary: number,
    secondary: number,
}
  
type Series = {
    label: string,
    data: DailyStars[],
}
  

const Chartt = () => {
    const data: Series[] = [
        {
            label: 'Rasd',
            data: [
              {
                  primary: 0,
                  date: new Date(),
                  stars: 0,
                  secondary: 6546
              },
              
              // ...
            ]
          },
        {
          label: 'ola',
          data: [
            {
                primary: 10,
                date: new Date(),
                stars: 10234230,
                secondary: 6546
            },
            // ...
          ]
        },
        {
            label: 'React 2',
            data: [
              {
                  primary: 9,
                  date: new Date(),
                  stars: 500000,
                  secondary: 6546
              },
              // ...
            ]
        },
        {
            label: 'React 3',
            data: [
              {
                  primary: 9.5,
                  date: new Date(),
                  stars: 4000000,
                  secondary: 6546
              },
              // ...
            ]
        }
    ]

    const primaryAxis = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>
    >(
        () => (
            {
                getValue: (datum) => datum.date.toString(),
            }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
    >(
        () => [
            {
                getValue: (datum) => datum.primary,
                elementType: 'bar',
            },
        ],
        []
    );

    return (
        <Chart
            options={{
                data,
                primaryAxis,
                secondaryAxes   ,
                dark: true,
            }}
        />
    )
}

export default Chartt;