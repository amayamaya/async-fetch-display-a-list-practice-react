import React from 'react';
import Herb from './Herb';

export default function HerbList({ herbs = [] }) {
  return (
    <div className="flower-list">
      {herbs.map((herb, i) => {
        return <Herb {...herb} key={herb.name + i + herb.id} />;
      })}
    </div>
  );
}
