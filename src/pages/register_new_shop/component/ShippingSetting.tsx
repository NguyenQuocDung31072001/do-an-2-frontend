import { Checkbox, Collapse, CollapseProps, Divider, Form, Modal, Switch } from 'antd'
import React from 'react'

type FormField = {
  hoa_toc_checked: boolean
  standard_checked: boolean
  saving_checked: boolean
}
export default function ShippingSetting() {
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Hỏa tốc',
      children: (
        <div className=' flex justify-between'>
          <span>
            Hỏa tốc <span className='text-red-500'>[COD đã được kích hoạt]</span>
          </span>
          <Form.Item<FormField> name='hoa_toc_checked' valuePropName='checked'>
            <Switch
              onChange={(e) => {
                if (!e) {
                  setOpenModal(true)
                }
              }}
            />
          </Form.Item>
        </div>
      )
    },
    {
      key: '2',
      label: 'Standard',
      children: (
        <div className=' flex justify-between'>
          <span>
            Nhanh <span className='text-red-500'>[COD đã được kích hoạt]</span>
          </span>
          <Form.Item<FormField> name='standard_checked' valuePropName='checked'>
            <Switch
              onChange={(e) => {
                if (!e) {
                  setOpenModal(true)
                }
              }}
            />
          </Form.Item>
        </div>
      )
    },
    {
      key: '3',
      label: 'Economy',
      children: (
        <div className=' flex justify-between'>
          <span>
            Tiết kiệm <span className='text-red-500'>[COD đã được kích hoạt]</span>
          </span>
          <Form.Item<FormField> name='saving_checked' valuePropName='checked'>
            <Switch
              onChange={(e) => {
                if (!e) {
                  setOpenModal(true)
                }
              }}
            />
          </Form.Item>
        </div>
      )
    }
  ]
  return (
    <div>
      <div className=''>
        <p>Phương thức vận chuyển</p>
        <p className='text-[12px] text-gray-500'>Kích hoạt phương thức vận chuyển</p>
      </div>
      <Divider />
      <Modal
        title='Lưu ý'
        centered
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
      >
        <p>
          Kênh vận chuyển này sẽ được tắt trên tất cả các sản phẩm hiện có của shop. Các sản phẩm không có bất cứ đơn vị
          vận chuyển nào được kích hoạt sẽ được ẩn, không hiển thị với người mua.
        </p>
      </Modal>
      <Collapse items={items} defaultActiveKey={['1', '2', '3']} />
    </div>
  )
}
