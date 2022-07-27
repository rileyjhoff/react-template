import { InputControl, TextAreaControl } from '../Forms/FormControls';
import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      Hello World from the About Page
      <form>
        <InputControl 
          label="Email:"
          name="email"
          placeholder="Enter your email"
          type="email"
          required
        />
        <InputControl 
          label="Password:"
          name="password"
          placeholder="Select a password"
          type="password"
          required
        />
        <TextAreaControl 
          label="Bio:" 
          placeholder="Include some information about yourself"
        />
      </form>
    </section>
  );
}
