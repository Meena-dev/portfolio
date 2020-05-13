import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Puzzle Game",
          subTitle: "Play with coins and have fun.I hope you like it.",
          imgSrc: "img/game.png",
          link: "https://meena-dev.github.io/Meena-dev-github.io.puzzle/",
          selected: false,
        },
        {
          id: 1,
          title: "Java Quiz",
          subTitle: "Simple Java collections quiz built with React",
          imgSrc: "img/quiz.jpg",
          link: "https://meena-dev.github.io/java-quiz/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
