import clsx from "clsx";
import styles from "./HeaderBar.module.css";

const HeaderBar = () => {
  return (
    <div className={clsx(styles["eshop-header"], styles.home)}>
      <div className={styles["eshop-header-hero"]}>
        <img role="presentation" src="/header-home.webp" />
      </div>
      <div className={styles["eshop-header-container"]}>
        <nav className={styles["eshop-header-navbar"]}>
          <a className={clsx(styles["logo-header"], styles.logo)}>
            <img
              alt="AdventureWorks"
              src="logo-header.svg"
              className={clsx(styles["logo-header"], styles.logo)}
            />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBar;
