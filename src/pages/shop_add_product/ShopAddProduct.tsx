import { Form, Input, InputNumber, Select } from 'antd'
import React from 'react'
import ProductImageUpload from './component/ProductImageUpload'
import { Helmet } from 'react-helmet-async'

/**
 * name
 *  description
 * price
 * slug
 * brand
 * category
 * attribute
 * image
 */
// type FieldForm = {
//   product_name: string
//   description: string
//   price: number

// }
const { TextArea } = Input

export default function ShopAddProduct() {
  return (
    <Form name='add_new_product'>
      <Helmet>
        <title>Tạo mới sản phẩm</title>
      </Helmet>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 mx-2 h-[600px] overflow-y-scroll bg-white py-8 px-4 shadow-lg'>
          <p className='text-[16px] font-semibold'>Description</p>
          <div className='my-4 rounded-[6px] border-[1px] border-gray-200 p-4'>
            <p className='text-[14px] font-medium text-gray-600'>Product name</p>
            <Form.Item name='product_name' rules={[{ required: true, message: 'Product name is required!' }]}>
              <Input placeholder='Product name' />
            </Form.Item>
            <p className='text-[14px] font-medium text-gray-600'>Price</p>
            <Form.Item name='price' rules={[{ required: true, message: 'Price is required!' }]}>
              <InputNumber type='number' placeholder='Price' />
            </Form.Item>
            <p className='text-[14px] font-medium text-gray-600'>Business description</p>
            <Form.Item name='description' rules={[{ required: true, message: 'Description is required!' }]}>
              <TextArea rows={4} placeholder='Description' maxLength={200} />
            </Form.Item>
          </div>

          <p className='text-[16px] font-semibold'>Category</p>
          <div className='my-4 rounded-[6px] border-[1px] border-gray-200 p-4'>
            <p className='text-[14px] font-medium text-gray-600'>Product category</p>
            <Form.Item name='product_name' rules={[{ required: true, message: 'Product name is required!' }]}>
              <Select placeholder='Product name' options={[]} />
            </Form.Item>
          </div>
          <p className='text-[16px] font-semibold'>Brand</p>
          <div className='my-4 rounded-[6px] border-[1px] border-gray-200 p-4'>
            <p className='text-[14px] font-medium text-gray-600'>Brand</p>
            <Form.Item name='branch' rules={[{ required: true, message: 'Branch is required!' }]}>
              <Select placeholder='Branch' options={[]} />
            </Form.Item>
          </div>
        </div>
        <div className='col-span-1 mx-2 bg-white px-4 py-8 shadow-lg'>
          <p className='text-[16px] font-semibold'>Product Image</p>
          <div className='my-4 rounded-[6px] border-[1px] border-gray-200 p-4'>
            <ProductImageUpload />
          </div>
        </div>
      </div>
    </Form>
  )
}
