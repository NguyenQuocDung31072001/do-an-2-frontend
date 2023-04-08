export interface IMocksDataFilter {
  title: string
  children?: { title: string }[]
}

export const MocksDataFilter: Record<string, IMocksDataFilter[]> = {
  'Thời Gian': [
    {
      title: '08/04/2022'
    },
    {
      title: '08/04/2022'
    },
    {
      title: '08/04/2022'
    },
    {
      title: '08/04/2022'
    }
  ],
  'Danh Mục': [
    {
      title: 'Quần áo phụ nữ'
    },
    {
      title: 'Áo sơ mi',
      children: [
        {
          title: 'Áo sơ mi nữ'
        },
        {
          title: 'Áo sơ mi nam'
        },
        {
          title: 'Áo sơ khoác'
        }
      ]
    }
  ],
  'Kích Thước': [
    {
      title: 'XS'
    },
    {
      title: 'S'
    },
    {
      title: 'M'
    },
    {
      title: 'L'
    },
    {
      title: 'XL'
    },
    {
      title: 'XS'
    }
  ],
  Kiểu: [
    {
      title: 'Áo sơ mi'
    },
    {
      title: 'Ngọn'
    }
  ],
  'Chiều Dài': [
    {
      title: 'Dài'
    },
    {
      title: 'Thường xuyên'
    },
    {
      title: 'Mùa vụ'
    }
  ],
  'Chiều Dài Tay': [
    {
      title: 'Tay áo dài '
    },
    {
      title: 'Ngắn tay '
    },
    {
      title: 'Không tay '
    }
  ]
}
