import React from 'react';
import styles from './WardrobeSuggestion.module.css';

const WardrobeSuggestion = ({ temperature, condition }) => {
  let suggestion = '';
  let shoeType = '';
  let layers = '';
  let sunscreen = '';
  let caution = '';

  if (condition === 'Rain' || 'Drizzle') {
    caution = 'Carry an umbrella or wear a waterproof jacket with a hood';
  } else if (condition === 'Snow') {
    caution = 'Wear waterproof boots and use caution when walking or driving';
  } else if (condition === 'Drought') {
    caution = 'Stay hydrated and be mindful of water usage';
  }

  if (temperature < 0) {
    suggestion = 'Heavy winter clothing, thermal underwear, and snow boots';
    shoeType = 'Snow boots or insulated waterproof boots';
    layers = 'At least 3 layers: thermal base layer, insulating middle layer, and weather-resistant outer layer';
    sunscreen = 'Sunscreen is not required';
  } else if (temperature >= 0 && temperature < 40) {
    suggestion = 'Warm clothing, jacket, hat, gloves, and scarf';
    shoeType = 'Insulated waterproof shoes or boots';
    layers = '2-3 layers: base layer, insulating layer, and outer layer (if needed)';
    sunscreen = 'Sunscreen is not required';
  } else if (temperature >= 40 && temperature < 55) {
    suggestion = 'Light jacket or sweater, long-sleeved shirt, and jeans';
    shoeType = 'Closed-toe shoes or sneakers';
    layers = '1-2 layers: base layer and outer layer (if needed)';
    sunscreen = 'Sunscreen is recommended if exposed to the sun for extended periods';
  } else if (temperature >= 55 && temperature < 70) {
    suggestion = 'T-shirt, jeans or light pants, and a light jacket if needed';
    shoeType = 'Sneakers or closed-toe shoes';
    layers = '1 layer, with a light outer layer if needed';
    sunscreen = 'Sunscreen is recommended if exposed to the sun for extended periods';
  } else if (temperature >= 70 && temperature < 85) {
    suggestion = 'T-shirt and shorts or light pants, sandals or light shoes';
    shoeType = 'Sandals, sneakers, or light shoes';
    layers = '1 layer';
    sunscreen = 'Sunscreen is highly recommended';
  } else if (temperature >= 85 && temperature < 100) {
    suggestion = 'Light, breathable clothing, sun hat, and sunglasses';
    shoeType = 'Sandals, sneakers, or breathable shoes';
    layers = '1 light layer';
    sunscreen = 'Sunscreen is highly recommended';
  } else {
    suggestion = 'Light, moisture-wicking clothing, sun protection, and hydrate frequently';
    shoeType = 'Breathable shoes or sandals';
    layers = '1 light, moisture-wicking layer';
    sunscreen = 'Sunscreen is highly recommended';
  }

  return (
    <div className={styles.suggestionContainer}>
      <h2 className={styles.suggestionTitle}>Might I Suggest</h2>
      <h3 className={styles.subTitle}>What to wear</h3>
      <p className={styles.subText}>{layers}</p>
      <p className={styles.suggestionText}>{suggestion}</p>
      <h3 className={styles.subTitle}>Shoes</h3>
      <p className={styles.subText}>{shoeType}</p>
      <h3 className={styles.subTitle}>Protection</h3>
      <p className={styles.subText}>{sunscreen}</p>
      {caution && (
        <>
        <h3 className={styles.subTitle}>Warning!</h3>
          <p className={styles.subText}>{caution}</p>
        </>
      )}
    </div>
  );
};


export default WardrobeSuggestion;
