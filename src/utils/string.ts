export const convertToVNPrice = (_input: string | number | undefined) => {
  if (!Number(_input || '')) return

  const input: number = Number(_input)

  return input.toLocaleString('vi', {
    style: 'currency',
    currency: 'VND'
  })
}
