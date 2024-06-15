export const PRODUCTS_TYPES = {
  CLOTH: {
    type: 'cloth',
    text: 'одежда',
  },
  ELECTRONICS: {
    type: 'electronics',
    text: 'электроника',
  },
  FURNITURE: {
    type: 'furniture',
    text: 'мебель',
  },
  FOOD: {
    type: 'food',
    text: 'продукты питания',
  },
} as const;

// export type PathNames = (typeof PRODUCTS_TYPES)[keyof typeof PRODUCTS_TYPES];
// 'одежда' | 'электроника' | 'мебель' | 'продукты питания';
