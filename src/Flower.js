import React from 'react';

export default function Flower({ name, colors, rating }) {
  return (
    <div className="flower">
      <p>{name}</p>
      <p>{colors}</p>
      <p>{rating}</p>
    </div>
  );
}
