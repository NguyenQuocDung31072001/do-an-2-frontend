import { Button, Table } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PathRouter } from '../../constant/path.router'
import { Helmet } from 'react-helmet-async'

export default function ShopProductList() {
  const navigate = useNavigate()

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]
  return (
    <div className='p-4'>
      <Helmet>
        <title>Danh sách sản phẩm</title>
      </Helmet>
      <p className='text-[18px] font-semibold'>Danh sách sản phẩm</p>
      <div className='flex justify-end'>
        <Button onClick={() => navigate(PathRouter.SHOP_ADD_PRODUCT)}>Thêm sản phẩm</Button>
      </div>
      <div className='my-8 w-full' />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}
