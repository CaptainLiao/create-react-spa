import React from 'react';

function LoadingComponent({ error }) {
  if (error) {
    return <div className="error">Error!</div>;
  } else {
    return (
      <div>l5555555oading....</div>
    );
  }
}

export default LoadingComponent