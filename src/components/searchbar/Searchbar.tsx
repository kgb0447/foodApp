import styles from "./Searchbar.module.scss";
export default function Searchbar() {
  const clearInput = (e: any) => {
    e.preventDefault();
    return (e.target.value = "");
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="search"
        name=""
        id=""
        className={styles.searchbar}
        onBlur={clearInput}
      />
      <div className={styles.filter}>
        <img
          src={require("../../assets/img/filter/filter_icon@2x.png")}
          alt=""
        />
      </div>
    </div>
  );
}
