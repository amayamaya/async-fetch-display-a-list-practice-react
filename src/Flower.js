import React from 'react';

export default function Flower({ name, colors, rating }) {
  return (
    <div className="flower">
      <h2>{name}</h2>
      <h4>{colors}</h4>
      <h4>{rating}</h4>
    </div>
  );
}
