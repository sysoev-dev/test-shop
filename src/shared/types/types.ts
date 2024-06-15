export interface Product {
  id: number;
  type: 'cloth' | 'electronics' | 'furniture' | 'food';
  name: string;
  price: number;
  installment?: boolean;
  discount?: number;
  onSale?: boolean;
  size?: string[];
  color?: string[];
  power?: string;
  expirationDate?: string;
  productionDate?: string;
}
