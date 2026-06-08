const name="Anice";
function displayMessage(){
  alert("Welcome to InstaLite app");
}
function Hello({person}) {
  //console.log("Hello component:", props);
  //const { message, name } = props;
  return (
    <div>
      <h1>Hello, {person.name}, {person.age} years old, {person.email} {person.emoji} {person.seatNumbers.join(",")}!</h1>
      <button onClick={displayMessage}>Click me</button>
      <p>Welcome to the InstaLite app.</p>
    </div>
  );
}
export default Hello
