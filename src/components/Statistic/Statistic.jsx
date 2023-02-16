import css from './Statistic.module.css';
import PropTypes from 'prop-types';

export function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.statistic}>
      <ul className={css.statisticList}>
        <li className={css.statisticItem}>
          Good <span className={css.itemResult}> {good}</span>
        </li>
        <li className={css.statisticItem}>
          Neutral
          <span className={css.itemResult}>{neutral} </span>
        </li>
        <li className={css.statisticItem}>
          Bad <span className={css.itemResult}>{bad}</span>
        </li>
        <li className={css.statisticItem}>
          Total <span className={css.itemResult}>{total}</span>
        </li>
        <li className={css.statisticItem}>
          Positive feedback
          <span className={css.itemResult}>{positivePercentage}</span>%
        </li>
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
