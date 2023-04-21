import React from 'react'
import StarIcon from '../../../icon/StarIcon'

export default function DetailProduct() {
  const [quantity, setQuantity] = React.useState(1)
  const currentPrice = (76200 as number).toLocaleString('vi', { style: 'currency', currency: 'VND' })
  const prevPrice = (140000 as number).toLocaleString('vi', { style: 'currency', currency: 'VND' })

  return (
    <div>
      <p>SHEIN Tops con trai Lá thư Hình học Giải trí</p>
      <div className='flex justify-between'>
        <p className='text-[12px] text-gray-500'>SKU: sk2211291200052315</p>
        <div className='flex items-center'>
          <StarIcon className='h-4 w-4 text-yellow-400' />
          <StarIcon className='h-4 w-4 text-yellow-400' />
          <StarIcon className='h-4 w-4 text-yellow-400' />
          <StarIcon className='h-4 w-4 text-yellow-400' />
          <StarIcon className='h-4 w-4 text-yellow-400' />
          <p className='text-yellow-400'>(32 Nhận xét)</p>
        </div>
      </div>
      <div className='flex items-center'>
        <p className='text-[24px] font-black text-orange-500'>{currentPrice}</p>
        <p className='text-[14px] text-gray-500 line-through'>{prevPrice}</p>
      </div>
      <div className='flex items-center'>
        <p className='text-[12px] font-medium text-orange-500'>Tiết kiệm: 63.800₫</p>
        <p className='ml-2 bg-yellow-500 px-1 text-[12px]'>-46%</p>
      </div>
      <div className='my-8 h-2 w-full border-t-[1px] border-dashed border-gray-300'></div>
      <div className='flex w-[250px] cursor-pointer items-center justify-center bg-black p-4 text-[20px] font-semibold text-white hover:bg-black/70'>
        Thêm vào giỏ hàng
      </div>
      {/* <div className='flex items-center'>
        <p>Số lượng</p>
        <div className='mx-16 flex'>
          <div
            className='h-[30px] cursor-pointer border-[1px] border-gray-400 px-2'
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1)
              }
            }}
          >
            -
          </div>
          <input
            type='text'
            className='h-[30px] w-[60px] border-[1px] border-gray-400 px-4 focus:outline-none'
            defaultValue={1}
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value))
            }}
          />
          <div
            className='h-[30px] cursor-pointer border-[1px] border-gray-400  px-2'
            onClick={() => {
              setQuantity(quantity + 1)
            }}
          >
            +
          </div>
        </div>
        <p>17 sản phẩm có sẵn</p>
      </div> */}
    </div>
  )
}
