import styles from "./CatalogListItem.module.css";

type CatalogItem = {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
};

export default function CatalogListItem({ item }: { item: CatalogItem }) {
  const imgUrl = `http://localhost:5222/api/catalog/items/${item.id}/pic?api-version=2.0`;
  return (
    <div className={styles.catalogItem}>
      <a className={styles.catalogProduct} href="/">
        <span className={styles.catalogProductImage}>
          <img alt={item.name} src={imgUrl} />
        </span>
        <span className={styles.catalogProductContent}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>${item.price.toFixed(2)}</span>
        </span>
      </a>
    </div>
  );
}
