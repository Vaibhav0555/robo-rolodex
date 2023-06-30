import { robots } from "./robots";
const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <h1>RoboFriends</h1>
      <div>
        <img alt="robots" src={`https://robohash.org/${id}test?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
