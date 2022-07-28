import SubmitButton from '../Buttons/SubmitButton';
import { 
  CheckboxControl, 
  Fieldset, 
  InputControl, 
  SelectControl, 
  TextAreaControl
} from '../Forms/FormControls';
import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      Hello World from the About Page
      <form>
        <Fieldset legend="Credentials">
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
        </Fieldset>
        <Fieldset legend="Additional Info">
          <SelectControl label="Favorite Single Digit Number:">
            <option disabled selected>--Select an option--</option>
            <option value="null">Dont have one</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </SelectControl>
          <CheckboxControl label="Do you like sushi?" text="Yes" />
          <TextAreaControl 
            label="Bio:" 
            placeholder="Include some information about yourself"
          />
        </Fieldset>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </section>
  );
}
