import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "a6555de22f4341d0bf21f16e787f59f5";

export default function FoodDetails({ foodId }) {
  // const [food, setFood] = useState({});
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!foodId) {
      setDetails(null);
      return;
    }
    async function fetchFoodDetails() {
      setLoading(true);
      try {
        const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
        const response = await axios.get(`${URL}?apiKey=${API_KEY}`);
        // const response = await fetch(URL, {
        //   method: "GET",
        //   headers: {
        //     "X-api-key": API_KEY,
        //   },
        // });
        // const data = await response.json();
        // setFood(data);
        setDetails(response.data)
      } catch (error) {
        console.error(error);
        setDetails(null);
      } finally {
        setLoading(false);
      }
    }

    fetchFoodDetails();
  }, [foodId])

  if (!foodId) {
    return <p className={styles.placeholder}>Select a recipe from the list</p>;
  }

  if (loading) {
    return <p className={styles.loading}>Loading recipe details...</p>;
  }

  if (!details) {
    return <p className={styles.placeholder}>Unable to load recipe details</p>;
  }
  return (
    <div className={styles.detailsContainer}>
      <img
        src={details.image}
        alt={details.title}
        className={styles.detailsImage}
      />
      <h1 className={styles.detailsTitle}>{details.title}</h1>
      <span className={styles.detailsTags}>
        <h5 className={styles.detailsVegetarian}>
          {details.vegitarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
        </h5>
        <h5 className={styles.detailsTime}>
          {details.readyInMinutes}⌚ minutes
        </h5>
      </span>
      <div
        className={styles.detailsSummary}
        dangerouslySetInnerHTML={{ __html: details.summary }}
      />
      {details.analyzedInstructions?.length > 0 && (
        <>
          <h2 className={styles.ingredientsTitle}>Steps</h2>
          <ul className={styles.ingredientsList}>
            {details.analyzedInstructions.map((instruction) => (
              <li key={instruction.id}>
                {instruction.steps.map((step) => (
                  <li key={step.id}>{step.step}</li>
                ))}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
