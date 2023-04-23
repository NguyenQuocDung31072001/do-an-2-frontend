interface IProps {
  disable?: boolean
}
export function QuantityController({ disable = false }: IProps) {
  return (
    <div className='flex'>
      <div
        className={`rounded-tl-[10px] rounded-bl-[10px] border-[1px] border-r-0 border-gray-300  px-2 ${
          disable ? 'text-gray-300' : 'cursor-pointer'
        }`}
      >
        -
      </div>
      <input
        className='w-[30px] border-[1px] border-gray-300 px-2 text-[12px] text-gray-600 focus:outline-none'
        defaultValue={0}
        disabled={disable}
      />
      <div
        className={`rounded-tr-[10px] rounded-br-[10px] border-[1px] border-l-0 border-gray-300  px-2 ${
          disable ? 'text-gray-300' : 'cursor-pointer'
        }`}
      >
        +
      </div>{' '}
    </div>
  )
}
