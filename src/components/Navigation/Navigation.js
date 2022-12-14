import React from 'react';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '1rem' }}>
      <p
        onClick={() => onRouteChange('signin')}
        className="f3 b link grow-large black underline pa3 pointer">
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
