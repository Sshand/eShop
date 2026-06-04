import styles from "./Catalog.module.css";
import CatalogListItem from "./CatalogListItem.server";

type CatalogItem = {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
};

async function CatalogList({
  count,
  data,
}: {
  count: number;
  data: CatalogItem[];
}) {
  const items = data ?? [];

  return (
    <div className={styles.catalog}>
      <div>
        <h1>There are {count ?? items.length} items</h1>
        <div className={styles.catalogItems}>
          {items.map((item) => (
            <CatalogListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogList;
