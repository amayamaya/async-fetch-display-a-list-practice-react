import React from 'react';

export default function Fancy({ name, hotness }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{hotness}</h4>
    </div>
  );
}
