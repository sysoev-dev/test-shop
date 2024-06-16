import { Product } from '../../shared/types/types';
import { calcDicountPrice, calcInstallment } from '../../utils/calc';
import { Card, Typography } from 'antd';
import { PRODUCTS_TYPES } from '../../shared/consts/products-type';
import './style.css';

interface CatalogItemProps {
  product: Product;
}

const { Title } = Typography;

function CatalogItem({ product }: CatalogItemProps) {
  const {
    id,
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
      <>
        <div className='card__data-list-row'>
          <dt>Размер:</dt>
          <dd>{size?.join(', ')}</dd>
        </div>
        <div className='card__data-list-row'>
          <dt>Цвет:</dt>
          <dd>{color?.join(', ')}</dd>
        </div>
      </>
    ) : type === PRODUCTS_TYPES.ELECTRONICS.type ? (
      <>
        <div className='card__data-list-row'>
          <dt>Мощность:</dt>
          <dd>{power}</dd>
        </div>
        <div className='card__data-list-row'>
          <dt>Цвет:</dt>
          <dd>{color?.join(', ')}</dd>
        </div>
      </>
    ) : type === PRODUCTS_TYPES.FURNITURE.type ? (
      <>
        <div className='card__data-list-row'>
          <dt>Размер:</dt>
          <dd>{size}</dd>
        </div>
        <div className='card__data-list-row'>
          <dt>Цвет:</dt>
          <dd>{color?.join(', ')}</dd>
        </div>
      </>
    ) : type === PRODUCTS_TYPES.FOOD.type ? (
      <>
        <div className='card__data-list-row'>
          <dt>Дата производства:</dt>
          <dd>{productionDate}</dd>
        </div>
        <div className='card__data-list-row'>
          <dt>Срок годности:</dt>
          <dd>{expirationDate}</dd>
        </div>
      </>
    ) : null;

  return (
    <Card
      cover={
        <img
          alt='example image'
          src='https://www.amityinternational.com/wp-content/uploads/2019/02/product-placeholder.jpg'
        />
      }
      hoverable
      className='catalog__item card'
    >
      {onSale && <div className='catalog__item-sale'>Акция!</div>}
      <div className='card__container'>
        <p className='card__code'>Артикул: {id}</p>
        <Title level={2}>{name}</Title>
        <div className='card__price-wrapper'>
          {discount ? (
            <p className='card__price'>
              Цена:{' '}
              <span className='card__price--discount'>{discountPrice}₽</span>
              <span className='card__price--old'>{price}</span>
            </p>
          ) : (
            <p className='card__price'>Цена: {price}₽</p>
          )}
          {installment && <p>Рассрочка: {installmentPrice} ₽/мес</p>}
        </div>
        <div className='card__data-wrapper'>
          <dl className='card__data-list'>{productInfo}</dl>
        </div>
      </div>
    </Card>
  );
}

export default CatalogItem;
