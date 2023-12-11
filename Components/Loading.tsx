import React from 'react';

const style: React.CSSProperties = {
  border: 'var(--gap-s) solid var(--color-02)',
  borderRightColor: 'var(--color-01)',
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  animation: 'spin 1s infinite',
};

const Loading = () => {
  return (
    <div style={style}>
      <style>
        {`
        @keyframes spin {
          to {
            transform: rotate(360deg)
          }
        }
        `}
      </style>
    </div>
  );
};

export default Loading;
