import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times!</button>
  );
};

export default Count;
