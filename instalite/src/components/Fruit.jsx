export default function Fruit({ fruit }) {
  return (
    <li>
      {fruit.name} : {fruit.color}
    </li>
  );
}