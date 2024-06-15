import { Product } from '../../shared/types/types';
import { calcDicountPrice, calcInstallment } from '../../utils/calc';
import { Card, Typography, Space } from 'antd';
import { PRODUCTS_TYPES } from '../../shared/consts/products-type';
import './style.css';

interface CatalogItemProps {
  product: Product;
}

const { Text, Title } = Typography;

function CatalogItem({ product }: CatalogItemProps) {
  const {
    name,
    price,
    installment,
    discount,
    size,
    color,
    power,
    expirationDate,
    productionDate,
    type,
    onSale,
  } = product;

  const discountPrice = discount ? calcDicountPrice(price, discount) : null;
  const installmentPrice = installment ? calcInstallment(price) : null;

  const productInfo =
    type === PRODUCTS_TYPES.CLOTH.type ? (
      <div>
        <Text>Размер: {size?.join(', ')}</Text>
        <Text>Цвет: {color?.join(', ')}</Text>
      </div>
    ) : type === PRODUCTS_TYPES.ELECTRONICS.type ? (
      <div>
        <Text>Мощность: {power}</Text>
        <Text>Цвет: {color?.join(', ')}</Text>
      </div>
    ) : type === PRODUCTS_TYPES.FURNITURE.type ? (
      <div>
        <Text>Размер: {size}</Text>
        <Text>Цвет: {color?.join(', ')}</Text>
      </div>
    ) : type === PRODUCTS_TYPES.FOOD.type ? (
      <div>
        <Text>Срок годности: {expirationDate}</Text>
        <Text>Дата производства: {productionDate}</Text>
      </div>
    ) : null;

  return (
    <Card
      className='catalog__item'
      hoverable
      style={{ width: 350 }}
      cover={
        <img
          alt='example'
          src='https://www.amityinternational.com/wp-content/uploads/2019/02/product-placeholder.jpg'
        />
      }
    >
      {onSale && <span className='catalog__item-sale'>Акция</span>}
      <Title level={3}>{name}</Title>

      {discount ? (
        <>
          <Text>Цена: </Text>
          <Text
            style={{ color: '#ff5c52', fontSize: '16px', marginRight: '5px' }}
          >
            {discountPrice} ₽
          </Text>
          <Text
            style={{
              textDecoration: 'line-through',
              color: '#888888',
              verticalAlign: 'super',
            }}
          >
            {price}
          </Text>
        </>
      ) : (
        <Text>Цена: {price} ₽</Text>
      )}
      <Space direction='vertical'>
        {installment && <Text>Рассрочка: {installmentPrice} ₽/мес</Text>}
        {productInfo}
      </Space>
    </Card>
  );
}

export default CatalogItem;
