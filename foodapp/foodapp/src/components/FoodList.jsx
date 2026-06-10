import FoodItem from "./FoodItem";

export default function FoodList({ foodData = [], setFoodId }) {
  return (
    <div>
      {foodData.map((food, index) => (
        <FoodItem food={food} key={food.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
