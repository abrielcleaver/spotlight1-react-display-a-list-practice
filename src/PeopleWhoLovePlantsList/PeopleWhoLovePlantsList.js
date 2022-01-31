import React from 'react';
import PeopleWhoLovePlantsItem from './PeopleWhoLovePlantsItem';

export default function PeopleWhoLovePlantsList(props) {
  return <div>
    <h2>Here Are People Who Love Plants Just as Much as Abriel Does!</h2>
    <div className="people-list">
      {props.person.map((person, i) => 
        <PeopleWhoLovePlantsItem key={`${person}-${i}`}
          {...person}
        />
      )}
    </div>
  </div>;
}
