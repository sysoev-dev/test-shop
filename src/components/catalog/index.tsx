import { useGetProductsQuery } from '../../shared/api/products-slice';
import CatalogItem from '../catalog-item';
import './style.css';

function Catalog() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (error || !products) {
    return <h1>Ошибка получения данных</h1>;
  }

  return (
    <>
      <h1>Каталог товаров</h1>
      <div className='catalog'>
        {products.map((item) => (
          <CatalogItem key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default Catalog;
