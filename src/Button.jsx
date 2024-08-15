import styles from "./Button.module.css";
import { useState } from 'react';

function Button({text, onClick}){
  return (
    <button className={styles.btn} onClick={onClick}>{text}</button>
  );
}
export default Button;