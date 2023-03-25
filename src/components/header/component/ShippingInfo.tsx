import React from 'react'

const listShippingInfo = [
  'THANH TOAN KHI NHẬN HÀNG',
  'GIẢM THÊM 15% ĐH ĐẦU TIÊN TỪ 700K',
  'Vận Chuyển Tiêu Chuẩn Miễn Phí Cho Đơn Hàng Trên 230.000₫'
]

export default function ShippingInfo() {
  const [positionShippingInfo, setPositionShippingInfo] = React.useState<number>(1)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (positionShippingInfo < 3) {
        setPositionShippingInfo(positionShippingInfo + 1)
      } else {
        setPositionShippingInfo(1)
      }
    }, 2000)
    return () => clearInterval(intervalId)
  }, [positionShippingInfo])

  return (
    <div>
      <p className='text-[12px] font-medium'>{listShippingInfo[positionShippingInfo - 1]}</p>
    </div>
  )
}
