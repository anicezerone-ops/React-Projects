import styles from './inlinecomponent.module.css';
const header = styles.header;
export default function InlineComponent() {
    return (
        <div>
            <h3 className={header}>Inline Component</h3>
        </div>
    )
}