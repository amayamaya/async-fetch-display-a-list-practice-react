import React from 'react';

export default function Herb({ name, rating }) {
  return (
    <div className="flower">
      <h2>{name}</h2>
      <h4>{rating}</h4>
    </div>
  );
}
