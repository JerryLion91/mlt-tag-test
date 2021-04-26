import React from 'react';
import Button from './Button';

export default function TagDisplay() {
  const TAGS = [
    {
      description: 'Tag blue and yellow',
      src: 'Noah_BlueYellow.png',
    },
    {
      description: 'Tag red and white',
      src: 'Noah_RedWhite.png',
    },
    {
      description: 'Tag yellow and black',
      src: 'Noah_YellowBlack.png',
    },
  ];
  const [selectedTagIndex, setSelectedTagIndex] = React.useState(0);

  const toggleIndex = (type) => {
    const maxIndex = TAGS.length - 1;
    switch (type) {
      case '-':
        if (selectedTagIndex === 0) {
          setSelectedTagIndex(maxIndex);
        } else {
          setSelectedTagIndex((prevIndex) => prevIndex - 1);
        }
        break;
      case '+':
        if (selectedTagIndex === maxIndex) {
          setSelectedTagIndex(0);
        } else {
          setSelectedTagIndex((prevIndex) => prevIndex + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.divFlexRow}>
      <Button
        onClick={() => toggleIndex('-')}
        icon={'keyboard_arrow_left'}
        text={''}
      />
      <img
        style={{ margin: 'auto', width: '75vw', maxWidth: '350px' }}
        src={TAGS[selectedTagIndex].src}
        alt={TAGS[selectedTagIndex].description}
      />
      <Button
        onClick={() => toggleIndex('+')}
        icon={'keyboard_arrow_right'}
        text={''}
      />
    </div>
  );
}

const styles = {
  divFlexRow: {
    margin: '20px',
    minWidth: '270px',
    maxWidth: '520px',
    width: '36vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
};
