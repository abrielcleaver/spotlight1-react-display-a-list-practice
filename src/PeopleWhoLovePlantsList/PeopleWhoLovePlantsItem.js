import './PeopleWhoLovePlants.css';

export default function PeopleWhoLovePlantsItem(props) {
  return <div className="people-item">
    <h3>{props.name}, {props.pronouns}</h3>
    <div>
      <img src={props.image} width={300} />
    </div>
    <p>{props.description.firstName} is a {props.description.location} {props.description.identity} who is {props.description.passion}</p>
    <p>Follow them on instagram: {props.description.instagram}</p>
  </div>;
}
