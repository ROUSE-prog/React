import React from 'react';
import styles from './WardrobeSuggestion.module.css';

const WardrobeSuggestion = ({ temperature }) => {
  let suggestion = '';

  if (temperature < 0) {
    suggestion = 'Heavy winter clothing';
  } else if (temperature >= 0 && temperature < 35) {
    suggestion = 'Warm clothing, jacket, and hat';
  } else if (temperature >= 36 && temperature < 50) {
    suggestion = 'Light jacket or sweater';
  } else if (temperature >= 51 && temperature < 65) {
    suggestion = 'T-shirt and shorts or light pants';
  } else {
    suggestion = 'Light, breathable clothing';
  }

  return (
    <div className={styles.suggestionContainer}>
      <h2 className={styles.suggestionTitle}>Wardrobe Suggestion</h2>
      <p className={styles.suggestionText}>{suggestion}</p>
    </div>
  );
  
};

export default WardrobeSuggestion;
