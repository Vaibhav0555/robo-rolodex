import Card from "./Card";
const CardList = (props) => {
  const { robots } = props;

  const cardComponents = robots.map((user, index) => {
    return (
      <Card
        id={robots[index].id}
        name={robots[index].name}
        email={robots[index].name}
      />
    );
  });
  return <div>{cardComponents}</div>;
};

export default CardList;
