import React from 'react'

export default function MainFooter() {
  return (
    <div className='w-full bg-gray-100 p-8'>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <div className='grid grid-cols-3'>
            <div className='col-span-1'>
              <p className='text-[12px] font-bold'>THÔNG TIN CÔNG TY</p>
              <ul>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Giới Thiệu SHOP</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Blogger Thời Trang</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Nghề Nghiệp</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <p className='text-[12px] font-bold'>HỖ TRỢ KHÁCH HÀNG</p>
              <ul>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Phí Vận Chuyển</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Trả Lại</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Hoàn Tiền</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Hướng Dẫn Đặt Hàng</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>
                  Làm Thế Nào Để Theo Dõi
                </li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Hướng Dẫn Kích Thước</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Trách Nhiệm Xã Hội</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Thành viên VIP</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <p className='text-[12px] font-bold'>DỊCH VỤ KHÁCH HÀNG</p>
              <ul>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Liên Hệ Chúng Tôi</li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>
                  Phương Thức Thanh Toán
                </li>
                <li className='my-1 cursor-pointer text-[12px] text-gray-600 hover:text-black'>Điểm Thưởng</li>
              </ul>
            </div>
          </div>
          <div className='mt-4'>
            <p className='my-1 ml-2 text-[12px] text-gray-600'>©2009-2023 SHEIN bảo lưu tất cả các quyền</p>
            <div className='flex flex-wrap'>
              <p className='my-1 cursor-pointer border-r-[1px] border-gray-300 px-2 text-[12px] text-gray-600 underline '>
                Trung tâm bảo mật
              </p>
              <p className='my-1 cursor-pointer border-r-[1px] border-gray-300 px-2 text-[12px] text-gray-600 underline '>
                Chính sách bảo mật & Cookie
              </p>
              <p className='my-1 cursor-pointer border-r-[1px] border-gray-300 px-2 text-[12px] text-gray-600 underline '>
                Điều khoản và Điều kiện
              </p>
              <p className='my-1 cursor-pointer border-r-[1px] border-gray-300 px-2 text-[12px] text-gray-600 underline '>
                Thông báo IP
              </p>
              <p className='my-1 cursor-pointer border-r-[1px] border-gray-300 px-2 text-[12px] text-gray-600 underline '>
                Dấu ấn
              </p>
              <p className='my-1 cursor-pointer px-2 text-[12px] text-gray-600 underline '>Vietnam</p>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <p className='text-[12px] font-bold'>KẾT NỐI VỚI CHÚNG TÔI</p>
          <ul
            tabIndex={0}
            className='my-4 flex'
            aria-label='Theo dõi chúng tôi trên Facebook, Instagram, Twitter, Youtube, Snapchat, Pinterest và TikTok!'
          >
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_pi/2019/10/15/15711268791b11aecd52c9ad7236770a437d626108.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_pi/2019/10/15/1571126900057552e0d97434ae7f9bcfe03cde7e5d.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_pi/2019/10/15/1571126913c17f781a002e2db08284534dbbbc524d.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_pi/2019/10/16/1571220781b937c4f7c80ea2a9af80101becf20218.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_pi/2019/10/16/15712208021360d27b22f101d99e524bdcc23073ee.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_pi/2019/10/16/15712208326c367e845b3530b8503f89f811d3c311.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_acp/2020/05/04/15885861254392fb0d220d5ec952a2b47833a5e52d.png'
              />
            </li>
            <li className='mr-4'>
              <img
                width={30}
                height={30}
                alt=''
                src='//img.ltwebstatic.com/images3_acp/2023/03/09/16783458255e2565ecf4477f9bd7c49b3c84f739d2.png'
              />
            </li>
          </ul>
          <p className='my-2 text-[12px] font-bold'>ĐĂNG KÝ NHẬN TIN TỪ SHOP</p>
          <div className='grid w-full grid-cols-4'>
            <div className='col-span-3'>
              <input
                type='text'
                className='w-full border-[1px] border-gray-200 px-4 py-2 text-[12px] hover:border-gray-400 focus:border-black focus:outline-none'
                placeholder='Địa chỉ email của bạn'
              />
            </div>
            <div className='col-span-1 flex cursor-pointer items-center justify-center bg-black py-1 px-2 text-white'>
              Đăng ký{' '}
            </div>
          </div>
          <p className='mt-4 text-[12px] font-bold'>CHÚNG TÔI CHẤP NHẬN</p>
          <div className='my-2 flex'>
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images2_pi/2018/06/06/15282732253085529991.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images2_pi/2018/06/06/1528273036537082707.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images2_pi/2018/06/06/1528273241354964734.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images2_pi/2018/06/06/15282719811871317559.png'
            />
            <img
              className='mr-2 h-[24px] w-[36px] '
              src='//img.ltwebstatic.com/images3_pi/2021/01/15/1610701410b3781f00695b77b833e6b6a5e38331a3.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
