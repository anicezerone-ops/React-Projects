import { useEffect,useState } from 'react'
import styles from './search.module.css';
const URL ='https://api.spoonacular.com/recipes/complexSearch';
const API_KEY ='26c030246e9340ea9e266aed96e6f8e0';
export default function Search({FoodData, setFoodData}){
    const [query, setQuery] = useState('pizza');
    useEffect(() => {
        async function fetchFood(){
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await response.json();
            console.log(data);
            setFoodData(data?.results ?? []);
        }
        fetchFood();
    }, [query]);
    return(
       <div className={styles.searchcontainer} >
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
       </div>
    )
}