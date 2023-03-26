export interface IFakeDataCategories {
  title: string
  description?: string
}

export const categories: Record<string, IFakeDataCategories[]> = {
  NỮ: [{ title: 'HÀNG MỚI' }, { title: 'GIẢM GIÁ' }, { title: 'TRANG PHỤC' }, { title: 'ĐỒ ĐI BIỂN' }],
  NAM: [{ title: 'HÀNG MỚI' }, { title: 'GIẢM GIÁ' }, { title: 'TRANG PHỤC' }, { title: 'ĐỒ ĐI BIỂN' }],
  'TRẺ EM': [
    { title: 'HÀNG MỚI', description: '0-3 tuổi' },
    { title: 'GIẢM GIÁ' },
    { title: 'EM BÉ', description: '0-3 tuổi' },
    { title: 'BÉ TRAI', description: '3-4 tuổi' },
    { title: 'BÉ GÁI', description: '3-4 tuổi' }
  ]
}
