import styles from "./Catalog.module.css";

async function CatalogList({ count }: any) {
  return (
    <div className={styles.catalog}>
      <h1>There are {count} items</h1>
    </div>
  );
}

export default CatalogList;
