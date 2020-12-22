import Axios from "axios";
import { useState, useEffect } from "react";
import { Card, Divider, Image } from "semantic-ui-react";

const MyCats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    Axios.get("/api/my_cats").then((res) => {
      setCats(res.data);
    });
  }, []);

  return (
    <>
      <Card.Group itemsPerRow={4}>
        {cats.map((cat) => (
          <Card key={cat.id}>
            <Image src={cat.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>{cat.name}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default MyCats;
