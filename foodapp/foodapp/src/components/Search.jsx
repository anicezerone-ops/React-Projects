import { useState, useEffect } from "react";
import styles from "./search.module.css";
import axios from "axios";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a6555de22f4341d0bf21f16e787f59f5"; // Replace with your actual API key
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("")
  useEffect(() => {
    if (!query.trim()) {
      setFoodData([]);
      return;
    }

    async function fetchFood() {
      try {
        const response = await axios.get(
          `${URL}?query=${query}&apiKey=${API_KEY}`
        );
        setFoodData(response.data?.results ?? []);
      } catch (error) {
        console.error(error);
        setFoodData([]);
      }
    }
    fetchFood();
  }, [query, setFoodData]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        value={query}
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
