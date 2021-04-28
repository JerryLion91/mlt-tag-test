import React from 'react';

import PropTypes from 'prop-types';

export default function Status({ status }) {
  return (
    <div>
      Status:
      {status === 'Submited' ? (
        <span>
          <span>Submited</span>

          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_unchecked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_unchecked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_unchecked
          </i>
        </span>
      ) : status === 'Processed' ? (
        <span>
          <i style={styles.icon} className="material-icons">
            radio_button_checked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>

          <span>Processed</span>

          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_unchecked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_unchecked
          </i>
        </span>
      ) : status === 'Delivered' ? (
        <span>
          <i style={styles.icon} className="material-icons">
            radio_button_checked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_checked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>

          <span>Delivered</span>

          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_unchecked
          </i>
        </span>
      ) : status === 'Received' ? (
        <span>
          <i style={styles.icon} className="material-icons">
            radio_button_checked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_checked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>
          <i style={styles.icon} className="material-icons">
            radio_button_checked
          </i>
          <i style={styles.icon} className="material-icons">
            horizontal_rule
          </i>

          <span>Received</span>
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

const styles = {
  icon: {
    color: 'grey',
    fontSize: 'calc(15px + 1vmin)',
  },
};
