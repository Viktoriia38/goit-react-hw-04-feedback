import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
