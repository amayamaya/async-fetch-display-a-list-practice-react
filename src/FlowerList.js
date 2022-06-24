import React from 'react';
import Flower from './Flower';

export default function FlowerList({ flowers = [] }) {
  return (
    <div className="flower-list">
      {flowers.map((flower, i) => {
        return <Flower {...flower} key={flower.name + i + flower.id} />;
      })}
    </div>
  );
}
