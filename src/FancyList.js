import React from 'react';
import Fancy from './Fancy';


export default function FancyList({ plants = [] }) {
  return (
    <div className="fancy-list">
      {plants.map((plant, i) => {
        return <Fancy {...plant} key={plant.name + i + plant.id} />;
      })}
    </div>
  );
}
