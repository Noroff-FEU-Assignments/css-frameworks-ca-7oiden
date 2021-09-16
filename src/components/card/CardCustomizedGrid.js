import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import News1 from "../../images/news/news-1.jpg";
import News2 from "../../images/news/news-2.jpg";
import News3 from "../../images/news/news-3.jpg";
import News4 from "../../images/news/news-4.jpg";
import News5 from "../../images/news/news-5.jpg";
import News6 from "../../images/news/news-6.jpg";
import News7 from "../../images/news/news-7.jpg";
import News8 from "../../images/news/news-8.jpg";

function CardCustomizedGrid() {
  return (
    <Row>
      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News1})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News2})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News3})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News4})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News5})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News6})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News7})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={4} xl={3}>
        <Card>
          <div
            className="card-img-top"
            style={{ backgroundImage: `url(${News8})` }}
          ></div>
          <Card.Body>
            <Card.Title as="h2">Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button className="card-button">More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardCustomizedGrid;
