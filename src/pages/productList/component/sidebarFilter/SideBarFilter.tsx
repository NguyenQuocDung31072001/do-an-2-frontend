import DoubleRangeSlider from '../../../../components/input/DoubleRangeSlider'
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
      <DoubleRangeSlider />
      {/* {Array(50)
        .fill(0)
        .map((data, index) => {
          return <div key={index}>{data + index}</div>
        })} */}
    </div>
  )
}
