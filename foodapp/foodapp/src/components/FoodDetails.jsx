import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

const DIET_LABELS = {
    cheap: "Budget Friendly",
    dairyFree: "Dairy Free",
    glutenFree: "Gluten Free",
    lowFodmap: "Low FODMAP",
    sustainable: "Sustainable",
    vegan: "Vegan",
    vegetarian: "Vegetarian",
    veryHealthy: "Very Healthy",
    veryPopular: "Very Popular",
};

export default function FoodDetails({ foodId }) {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!foodId) return;

        async function fetchFood() {
            setLoading(true);
            setError(null);

            try {
                const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
                const API_KEY = "26c030246e9340ea9e266aed96e6f8e0";
                const response = await fetch(`${URL}?apiKey=${API_KEY}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch recipe details");
                }

                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                setError(err.message);
                setRecipe(null);
            } finally {
                setLoading(false);
            }
        }

        fetchFood();
    }, [foodId]);

    if (!foodId) {
        return <p className={styles.loading}>Select a recipe to view details</p>;
    }

    if (loading) {
        return <p className={styles.loading}>Loading recipe details...</p>;
    }

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    if (!recipe) {
        return null;
    }

    const dietBadges = Object.entries(DIET_LABELS)
        .filter(([key]) => recipe[key])
        .map(([, label]) => label);

    const steps =
        recipe.analyzedInstructions?.[0]?.steps ??
        recipe.instructions
            ?.replace(/<[^>]+>/g, "")
            .split(".")
            .filter(Boolean)
            .map((step, index) => ({ number: index + 1, step: step.trim() })) ??
        [];

    return (
        <div className={styles.details}>
            <img
                className={styles.heroImage}
                src={recipe.image}
                alt={recipe.title}
            />

            <h1 className={styles.title}>{recipe.title}</h1>

            {dietBadges.length > 0 && (
                <div className={styles.badges}>
                    {dietBadges.map((badge) => (
                        <span key={badge} className={styles.badge}>
                            {badge}
                        </span>
                    ))}
                </div>
            )}

            <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Ready In</span>
                    <span className={styles.metaValue}>
                        {recipe.readyInMinutes ?? "—"} min
                    </span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Servings</span>
                    <span className={styles.metaValue}>{recipe.servings}</span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Likes</span>
                    <span className={styles.metaValue}>
                        {recipe.aggregateLikes}
                    </span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Price / Serving</span>
                    <span className={styles.metaValue}>
                        ${(recipe.pricePerServing / 100).toFixed(2)}
                    </span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Health Score</span>
                    <span className={styles.metaValue}>
                        {recipe.healthScore}
                    </span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Spoonacular Score</span>
                    <span className={styles.metaValue}>
                        {Math.round(recipe.spoonacularScore)}%
                    </span>
                </div>
                {recipe.weightWatcherSmartPoints != null && (
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>WW Points</span>
                        <span className={styles.metaValue}>
                            {recipe.weightWatcherSmartPoints}
                        </span>
                    </div>
                )}
                {recipe.creditsText && (
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Source</span>
                        <span className={styles.metaValue}>
                            {recipe.creditsText}
                        </span>
                    </div>
                )}
            </div>

            {recipe.summary && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Summary</h2>
                    <div
                        className={styles.summary}
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}
                    />
                </section>
            )}

            {recipe.cuisines?.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Cuisines</h2>
                    <ul className={styles.tagList}>
                        {recipe.cuisines.map((cuisine) => (
                            <li key={cuisine} className={styles.tag}>
                                {cuisine}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {recipe.dishTypes?.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Dish Types</h2>
                    <ul className={styles.tagList}>
                        {recipe.dishTypes.map((type) => (
                            <li key={type} className={styles.tag}>
                                {type}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {recipe.diets?.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Diets</h2>
                    <ul className={styles.tagList}>
                        {recipe.diets.map((diet) => (
                            <li key={diet} className={styles.tag}>
                                {diet}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {recipe.extendedIngredients?.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Ingredients</h2>
                    <ul className={styles.ingredientList}>
                        {recipe.extendedIngredients.map((ingredient) => (
                            <li
                                key={`${ingredient.id}-${ingredient.original}`}
                                className={styles.ingredientItem}
                            >
                                {ingredient.original}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {steps.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Instructions</h2>
                    <ol className={styles.stepList}>
                        {steps.map((step) => (
                            <li key={step.number} className={styles.stepItem}>
                                <span className={styles.stepNumber}>
                                    {step.number}
                                </span>
                                <span className={styles.stepText}>
                                    {step.step}
                                </span>
                            </li>
                        ))}
                    </ol>
                </section>
            )}

            {recipe.sourceUrl && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Original Recipe</h2>
                    <a
                        className={styles.sourceLink}
                        href={recipe.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on {recipe.sourceName ?? "source website"}
                    </a>
                </section>
            )}
        </div>
    );
}
