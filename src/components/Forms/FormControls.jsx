import styles from './FormControls.css';
import classNames from 'classnames';


function FormControl({ label, children }) {
  return (
    <label className={styles.FormControl}>
      <Label text={label} />
      {children}
    </label>
  );
}

function Label({ text }) {
  return (
    <span className="label-text">{text}</span>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest} ></textarea>
    </FormControl>
  );
}
