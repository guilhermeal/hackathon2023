import { TeamProps } from "../helpers/team";

interface PersonProps {
  person: TeamProps;
}

export const Person = ({ person }: PersonProps) => {
  return <div className="boxAvatar">
    <img className="avatar" src={person.avatar} alt={`Photo by ${person.name}`} />
    <div className="contantAvatar">
      <h3>{person.name}</h3>
      <legend>{person.job} - {person.coutry}</legend>
      <span>{person.social}</span>
    </div>
  </div>;
};
