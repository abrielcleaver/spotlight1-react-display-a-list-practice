import React from 'react';
import PeopleWhoLovePlantsItem from './PeopleWhoLovePlantsItem';

export default function PeopleWhoLovePlantsList(props) {
  return <div>
    <div>
      <h2>Congratulations, you rendered PeopleWhoLovePlantsList!</h2>
    </div>
    <div>
      {props.person.map((person, i) => 
        <PeopleWhoLovePlantsItem key={`${person}-${i}`}
          {...person}
        />
      )}
    </div>
  </div>;
}
