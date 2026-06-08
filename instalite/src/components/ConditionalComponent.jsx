export default function ConditionalComponent() {
  const display = true;
  if (display) {
    return (
        <div>
            <h1>Conditional Component</h1>
            <p>This component is conditionally rendered based on the condition prop.</p>
        </div>
    );
    }
    else {
        return (
        <div>
            <h1>else  Conditional Component</h1>
            <p>This component is conditionally rendered based on the condition prop.</p>
        </div>
    );
}
}