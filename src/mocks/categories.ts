export interface IFakeDataCategories {
  title: string
  description?: string
  children?: any
}

export const categories: Record<string, IFakeDataCategories[]> = {
  NỮ: [
    {
      title: 'HÀNG MỚI NỮ',
      children: {
        'ÁO BƠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO LOẠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO XU HƯỚNG': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini']
      }
    },
    {
      title: 'GIẢM GIÁ NỮ',
      children: {
        'ÁO BƠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO LOẠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO XU HƯỚNG': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini']
      }
    },
    {
      title: 'TRANG PHỤC NỮ',
      children: {
        'ÁO BƠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO LOẠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO XU HƯỚNG': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini']
      }
    },
    {
      title: 'ĐỒ ĐI BIỂN NỮ',
      children: {
        'ÁO BƠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO LOẠI': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini'],
        'MUA THEO XU HƯỚNG': ['Bộ bikini', 'Bộ bikini', 'Bộ bikini', 'Bộ bikini']
      }
    }
  ],
  NAM: [{ title: 'HÀNG MỚI NAM' }, { title: 'GIẢM GIÁ NAM' }, { title: 'TRANG PHỤC NAM' }, { title: 'ĐỒ ĐI BIỂN NAM' }],
  'TRẺ EM': [
    { title: 'HÀNG MỚI', description: '0-3 tuổi' },
    { title: 'GIẢM GIÁ' },
    { title: 'EM BÉ', description: '0-3 tuổi' },
    { title: 'BÉ TRAI', description: '3-4 tuổi' },
    { title: 'BÉ GÁI', description: '3-4 tuổi' }
  ]
}
