import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" }
  ];

  return (
    <div>
      <h1>Fruits</h1>

      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            fruit={fruit}
          />
        ))}
      </ul>
    </div>
  );
}