import { Button, Card, Header, Icon, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
export default () => {
  const [cats, setCats] = useState([]);
  //onMount load cats
  useEffect(() => {
    Axios.get("/api/cats")
      .then((res) => {
        console.log(res.data);
        setCats(res.data);
      })
      .catch((err) => {
        alert("error");
      });
  }, []);

  const downVote = (id) => {
    setCats(cats.filter((c) => c.id !== id));
  };

  const upVote = (id) => {
    Axios.put(`/api/cats/${id}`).then((res) => {
      setCats(cats.filter((c) => c.id !== id));
    });
  };
  const renderCat = () => {
    if (cats.length == 0) return <h1>no More Cats</h1>;

    const index = Math.floor(Math.random() * cats.length);
    let cat = cats[index];
    return (
      <>
        <Card key={cat.id}>
          <Image src={cat.avatar} />
          <Card.Content>
            <Card.Header>{cat.name}</Card.Header>
            <Card.Description>{cat.breed}</Card.Description>
            <Card.Meta>{cat.registry}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button color="red" icon basic onClick={() => downVote(cat.id)}>
              <Icon name="thumbs down" />
            </Button>
            <Button color="green" icon basic onClick={() => upVote(cat.id)}>
              <Icon name="thumbs up" />
            </Button>
          </Card.Content>
        </Card>
      </>
    );
  };

  return (
    <>
      <Header as="h1">Cat Tinder</Header>
      {renderCat()}
      <Link to="/my_cats">
        <Button color="blue">My Cats</Button>
      </Link>
    </>
  );
};
