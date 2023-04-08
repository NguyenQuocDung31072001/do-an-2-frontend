import React from 'react'

export default function DoubleRangeSlider() {
  const [minVal, setMinVal] = React.useState<number>(0)
  const [maxVal, setMaxVal] = React.useState<number>(100)
  const [currentValue, setCurrentValue] = React.useState<number>(20)
  return (
    <div>
      <input
        type='range'
        min={minVal}
        max={maxVal}
        value={currentValue}
        // ref={minValRef}
        onChange={(event) => {
          console.log({ value: event.target.value })

          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
        }}
      />
    </div>
  )
}
