import DoubleRangeSlider from '../../../../components/input/DoubleRangeSlider'
import MultiRangeSlider from '../../../../components/input/MultiRangerSlider'
import { MocksDataFilter } from '../../../../mocks/category/dataFilter'
import FilterWrapperItem from './component/FilterWarpperItem'

export default function SideBarFilter() {
  return (
    <div className='h-[800px] w-[250px] overflow-y-scroll border-t-[1px] border-gray-200 p-4'>
      {Object.keys(MocksDataFilter).map((nameHeaderFilter, index) => {
        return (
          <div key={index}>
            <FilterWrapperItem nameHeaderFilter={nameHeaderFilter} />
          </div>
        )
      })}
      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => {
          console.log(`min = ${min}, max = ${max}`)
        }}
      />
    </div>
  )
}
