import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId, isSelected }) {
  return (
    <div
      className={`${styles.itemContainer} ${isSelected ? styles.selected : ""}`}
      onClick={() => setFoodId(food.id)}
    >
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemInfo}>
        <p className={styles.itemTitle}>{food.title}</p>
      </div>
      <div className={styles.itemButtonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          view Recipe
        </button>
      </div>
    </div>
  );
}
