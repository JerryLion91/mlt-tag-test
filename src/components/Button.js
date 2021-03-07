import React from 'react';

export default function Button({ onClick, icon, text = '', classNames }) {
  return (
    <a className={` ${classNames}`} style={styles.button} onClick={onClick}>
      {icon && (
        <i style={styles.icon} className="material-icons">
          {icon}
        </i>
      )}

      {text}
    </a>
  );
}

const styles = {
  icon: {
    color: 'grey',
    fontSize: 'calc(15px + 1.5vmin)',
  },
  button: {
    margin: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
  },
};
