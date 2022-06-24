import React from 'react';

export default function Herb({ name, rating }) {
  return (
    <div className="flower">
      <p>{name}</p>
      <p>{rating}</p>
    </div>
  );
}
