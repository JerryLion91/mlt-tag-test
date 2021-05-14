import React from 'react';

import styles from '../styles/styles';

export default function LoadingPage() {
  return (
    <>
      <img style={styles.loadingGif} src={'loading.gif'} alt="loading..." />
    </>
  );
}
