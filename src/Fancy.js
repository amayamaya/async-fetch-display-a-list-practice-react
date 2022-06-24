import React from 'react';

export default function Fancy({ name, hotness }) {
  return (
    <div>
      <p>{name}</p>
      <p>{hotness}</p>
    </div>
  );
}
