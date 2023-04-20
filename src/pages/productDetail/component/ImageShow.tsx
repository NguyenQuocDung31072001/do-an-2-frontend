import React from 'react'

const Images = [
  'https://img.ltwebstatic.com/images3_pi/2021/04/28/1619574642f08fbc1f9b73b1ca70e66f466c830e41_thumbnail_900x.webp',
  'https://img.ltwebstatic.com/images3_pi/2021/04/28/161957464582cac0c20c88ab2eeb748f08071c2bd1_thumbnail_900x.webp',
  'https://img.ltwebstatic.com/images3_pi/2021/04/28/1619574648b58c118a7152d5d01a8c9c156b70d21b_thumbnail_900x.webp',
  'https://img.ltwebstatic.com/images3_pi/2021/04/28/16195746515f37c12df62adb2221985b0c8af4d820_thumbnail_900x.webp'
]
export default function ImageShow() {
  const [imageSelected, setImageSelected] = React.useState<string>(Images[0])
  const imageRef = React.useRef<HTMLImageElement>(null)

  //function
  const handleZoomIn = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const image = imageRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image

    const offsetX = event.pageX - (rect.x + window.scrollX)
    const offsetY = event.pageY - (rect.y + window.scrollY)

    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)
    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.maxWidth = 'unset'
    image.style.top = top + 'px'
    image.style.left = left + 'px'
  }
  const handleZoomOut = () => {
    imageRef.current?.removeAttribute('style')
  }

  return (
    <div className='grid grid-cols-10'>
      <div className='col-span-1'>
        {Images.map((image, index) => {
          const className =
            image === imageSelected ? 'my-2 border-[1px] border-gray-600 p-[1px] cursor-pointer' : 'my-2 p-[1px]'
          return (
            <div key={index} className={className} onMouseEnter={() => setImageSelected(image)}>
              <img src={image} alt='' className='object-cover' />
            </div>
          )
        })}
      </div>
      <div
        className='relative col-span-9 mx-4 h-[600px] w-full overflow-hidden'
        onMouseMove={handleZoomIn}
        onMouseLeave={handleZoomOut}
      >
        <img
          ref={imageRef}
          src={imageSelected}
          alt=''
          className='absolute left-0 top-0 h-full w-full cursor-zoom-in object-cover'
        />
      </div>
    </div>
  )
}
