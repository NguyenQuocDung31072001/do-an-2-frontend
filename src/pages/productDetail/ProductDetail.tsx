import MainHeader from '../../components/header/MainHeader'
import MainFooter from '../../components/footer/MainFooter'
import ImageShow from './component/ImageShow'
import DetailProduct from './component/DetailProduct'
import DropdownCategory from '../../components/dropdown/DropdownCategory'
import ProductRating from '../../components/ProductRating'
import LikeSolidIcon from '../../icon/LikeSolidIcon'

const Comments = [
  {
    user: {
      avatar: 'https://cf.shopee.vn/file/0a52223d02efdd5ecd1d3015df7dc717_tn',
      username: 'nguyen quoc dung'
    },
    created: '01/04/2022',
    title: 'Good quality and amazing',
    rate: 5
  },
  {
    user: {
      avatar: 'https://cf.shopee.vn/file/0a52223d02efdd5ecd1d3015df7dc717_tn',
      username: 'nguyen quoc dung'
    },
    created: '01/04/2022',
    title: 'Good quality and amazing',
    rate: 3.4
  },
  {
    user: {
      avatar: 'https://cf.shopee.vn/file/0a52223d02efdd5ecd1d3015df7dc717_tn',
      username: 'nguyen quoc dung'
    },
    created: '01/04/2022',
    title: 'Good quality and amazing',
    rate: 4.6
  }
]
export default function ProductDetail() {
  return (
    <div className='flex flex-col items-center bg-white px-48'>
      <MainHeader />
      <div className='mt-[180px]' />
      <div className='h-[600px] w-full '>
        <div className='grid w-full grid-cols-9'>
          <div className='col-span-5 h-4 w-full'>
            <ImageShow />
          </div>
          <div className='col-span-4 ml-8 h-4 w-full'>
            <DetailProduct />
          </div>
        </div>
      </div>
      <div className='mt-[50px] w-full'>
        <p className='text-[24px] font-bold'>Khách hàng đánh giá (100 +)</p>
      </div>
      <div className='my-4 w-full bg-gray-100 p-4'>
        <div>
          <p className='py-4'>Đánh giá trung bình</p>
          <div className='flex items-center py-2'>
            <p className='mr-4 text-[20px] font-medium'>4.98</p>
            <div className='flex items-center'>
              <ProductRating
                rating={4.5}
                activeClassname='h-6 w-6 fill-yellow-300 text-yellow-300'
                nonActiveClassname='h-6 w-6 fill-current text-gray-300'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <p className='font-bold'>Tất cả đánh giá (100+)</p>
        <div className='flex items-center'>
          <p className='mx-4'>Xếp hạng</p>
          <DropdownCategory
            dataList={['5 ngôi sao', '4 ngôi sao', '3 ngôi sao', '2 ngôi sao', '1 ngôi sao']}
            title='Tất cả'
          />
        </div>
        <div className='flex items-center'>
          <p className='mx-4'>Sắp xếp theo</p>
          <DropdownCategory
            dataList={['Gần đây nhất đến cũ nhất', 'Cũ nhất đến gần đây nhất']}
            title='Giới thiệu'
            classNameItem='w-[200px] cursor-pointer px-4 py-1'
            classNameParent='w-[150px] cursor-pointer border-[1px] px-4 py-2 font-medium'
          />
        </div>
      </div>
      <div className='flex w-full flex-col'>
        {Comments.map((comment, index) => {
          return (
            <div key={index} className='my-2 flex flex-col border-b-[1px] border-gray-200 py-2'>
              <div className='my-2 flex'>
                <div className='mr-8'>
                  <img src={comment.user?.avatar || ''} alt='' className='h-12 w-12 rounded-[50%] object-cover' />
                </div>
                <div>
                  <p className='text-[12px] text-black/90'>{comment.user?.username || ''}</p>
                  <ProductRating rating={comment.rate} />
                  <p className='my-2 text-[12px] text-gray-500'>{comment.created || ''}</p>
                  <p className='text-[14px] font-medium'>{comment.title}</p>
                  <div className='mt-2'>
                    <LikeSolidIcon className='h-4 w-4 cursor-pointer text-red-400' />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='my-[100px]'></div>
      <MainFooter />
    </div>
  )
}
