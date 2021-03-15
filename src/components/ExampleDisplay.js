import React from 'react';

export default function ExampleDisplay() {
  const IMGs = [
    {
      description: 'The tag attached a piece of cloth',
      src: 'Example_image.png',
      alt: 'example',
    },
    {
      description: 'Holding the tag with the hand',
      src: 'Example_image.png',
      alt: 'example',
    },
  ];
  return (
    <div style={styles.divFlexColumn}>
      {IMGs.map((img, index) => {
        return (
          <div key={index}>
            <label style={{ margin: '30px', ...styles.divFlexColumn }}>
              <img
                style={{ margin: 'auto', width: '60vw', maxWidth: '280px' }}
                src={img.src}
                alt={img.alt}
              />
              {img.description}
            </label>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  divFlexColumn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#520369',
    width: '60vw',
    maxWidth: '280px',
  },
};
