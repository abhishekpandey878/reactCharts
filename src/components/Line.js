import React from 'react'
import { Chart } from 'react-charts'
 
export default function Line() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      },
      {
        label: 'Series 3',
        data: [[0, 2], [1, 3], [2, 6], [3, 4], [4, 6]]
      },
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return(
    <div
      style={{
        width: '500px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}