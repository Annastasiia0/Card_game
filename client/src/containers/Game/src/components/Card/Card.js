import React, { PropTypes } from 'react';
import { CardModel } from '../../redux/modules/card';

import styles from './Card.scss';

const Card = ({ card, className, isDragging }) => {
  const { name, mana, attack, defense, portrait,description } = card;


  return (
    <div className={}>
      <div
        className={styles.CardPortrait}
        style={{ backgroundImage: `url(${portrait})` }}
      />
      <div className={styles.CardMana}>{ mana || 0 }</div>
      <h1 className={styles.CardName}>{ name }</h1>
      { attack ? <div className={styles.CardAttack}>{ attack }</div> : null }
      { defense ? <div className={styles.CardDefense}>{ defense }</div> : null }
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.instanceOf(CardModel).isRequired,
  isDragging: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
