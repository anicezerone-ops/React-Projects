import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId, isSelected }) {    
  return (
    <div className={`${styles.itemContainer} ${isSelected ? styles.selected : ''}`} onClick={() => setFoodId(food.id)}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => setFoodId(food.id)} className={styles.itemButton}>View Recipe</button>
        {/* <button onClick={() => setFavorites(food.id)} className={styles.itemButton}>Add to Favorites</button> */}
      </div>
    </div>
  );
}
