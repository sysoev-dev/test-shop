export function calcDicountPrice(price: number, discount: number) {
  return (price - (price * discount) / 100).toFixed(0);
}

export function calcInstallment(price: number) {
  return (price / 12).toFixed(0);
}
