import React, { useState } from 'react';
import styles from './OutfitHistory.module.css';


const OutfitHistory = () => {
  const outfitHistoryData = [
    { id: 1, date: '2023-04-01', outfit: 'T-shirt, shorts, and sneakers' },
    { id: 2, date: '2023-04-02', outfit: 'Sweater, jeans, and boots' },
    { id: 3, date: '2023-04-03', outfit: 'Light jacket, pants, and loafers' },
    // Add more data as needed
  ];

  const [outfitHistory, setOutfitHistory] = useState(outfitHistoryData);

  return (
    <div className={styles.historyContainer}>
      <h2 className={styles.historyTitle}>Outfit History</h2>
      <ul className={styles.historyList}>
        {outfitHistory.map((item) => (
          <li key={item.id} className={styles.historyItem}>
            {item.date}: {item.outfit}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default OutfitHistory;
