import React from 'react'
import classnames from 'classnames'
import './css/multiRangeSlider.css'
import { convertToVNPrice } from '../../utils/string'

interface IPropsMultiRangerSlider {
  min: number
  max: number
  onChange: ({ min, max }: { min: number; max: number }) => any
}
const MultiRangeSlider = ({ min, max, onChange }: IPropsMultiRangerSlider) => {
  const [minVal, setMinVal] = React.useState(min)
  const [maxVal, setMaxVal] = React.useState(max)
  const minValRef = React.useRef<HTMLInputElement>(null)
  const maxValRef = React.useRef<HTMLInputElement>(null)
  const range = React.useRef<HTMLDivElement>(null)

  const getPercent = React.useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  React.useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  React.useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  React.useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className='container'>
      <input
        type='range'
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
        }}
        className={classnames('thumb thumb--zindex-3', {
          'thumb--zindex-5': minVal > max - 100
        })}
      />
      <input
        type='range'
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
          event.target.value = value.toString()
        }}
        className='thumb thumb--zindex-4'
      />

      <div className='slider'>
        <div className='slider__track' />
        <div ref={range} className='slider__range' />
        <div className='slider__left-value'>{convertToVNPrice(minVal)}</div>
        <div className='slider__right-value'>{convertToVNPrice(maxVal)}</div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
