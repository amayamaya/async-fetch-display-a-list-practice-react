import React from 'react';
import Vine from './Vine';

export default function VineList({ vines = [] }) {
  return (
    <div className="vine-list">
      {vines.map((vine, i) => {
        return <Vine {...vine} key={vine.name + i + vine.id} />;
      })}
    </div>
  );
}
