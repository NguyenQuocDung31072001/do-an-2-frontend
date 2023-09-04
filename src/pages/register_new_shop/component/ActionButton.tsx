import { Button, Form, FormInstance } from 'antd'
import React from 'react'

interface IProps {
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  current: number
  form: FormInstance<any>
}
export default function ActionButton({ current, setCurrent, form }: IProps) {
  const validatetoNextStep = () => {
    switch (current) {
      case 0:
        form.validateFields(['shop_name', 'shop_address']).then((r) => {
          setCurrent(current + 1)
        })
        break
      case 1:
        form.validateFields(['hoa_toc_checked', 'standard_checked', 'saving_checked']).then((r) => {
          setCurrent(current + 1)
        })
        break
    }
  }
  return (
    <div className='mt-8 flex w-full justify-between'>
      {current > 0 ? (
        <Button
          onClick={() => {
            setCurrent(current - 1)
          }}
        >
          Back
        </Button>
      ) : (
        <div />
      )}
      {current < 2 ? (
        <Button
          onClick={() => {
            validatetoNextStep()
          }}
        >
          Next
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}
