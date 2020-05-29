import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: "ddffeec6-e5dd-4c92-9ad1-bba890590fac",
          name: "Pimento - Canned",
          description:
            "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "c8bc15de-8145-4223-bc91-2670c9ff924e",
          name: "Steampan Lid",
          description:
            "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "6a39d22b-f01b-4c7f-968d-e7c03c6c9c14",
          name: "Gherkin",
          description:
            "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "18f287ea-98f0-445b-b3ad-5c888a7048db",
          name: "Soup Campbells Turkey Veg.",
          description:
            "pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "9dbae917-b90e-4e98-936b-732dffbdf4f9",
          name: "Foil - 4oz Custard Cup",
          description:
            "ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "d34e2e89-a170-4e3a-a224-1e8503153912",
          name: "Roe - Flying Fish",
          description:
            "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "2eecec31-98e3-467f-a622-84bdc1e71913",
          name: "Nut - Almond, Blanched, Whole",
          description:
            "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "c8bf7227-f4e9-4ecd-b88f-90fc7115895c",
          name: "Veal - Inside",
          description:
            "erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "7186664b-173e-431b-851c-9585d51d6b9c",
          name: "Ecolab - Power Fusion",
          description:
            "dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "a62e8e09-5a93-48b2-96da-e6a93b92cdb7",
          name: "Milk Powder",
          description:
            "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "4ea4bdfa-3a6e-45ff-ab5d-97db91da7bfd",
          name: "Wine - Alsace Riesling Reserve",
          description:
            "ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "57e5cbdd-7e08-453b-b605-28445d319343",
          name: "Veal - Nuckle",
          description:
            "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "c7c6b029-4c09-456c-9a37-f0f598db67a8",
          name: "Coconut - Creamed, Pure",
          description:
            "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "7db795b5-026e-43de-88e3-bdac87578284",
          name: "Beer - Blue",
          description:
            "sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "b288250b-8ce6-40b2-9a73-8b63822dd928",
          name: "Soy Protein",
          description:
            "nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "2d217279-dc9c-48e0-861e-4d68d2e27c90",
          name: "Compound - Raspberry",
          description:
            "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "ef3872f6-e6de-4bc1-a8d6-87de3b560cfc",
          name: "Sauce - Chili",
          description:
            "nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "e15b4e72-4b7a-4260-a719-5e7a340e04e9",
          name: "Creme De Menth - White",
          description:
            "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: "4e6c26fa-7d11-4343-b5e8-7d95db01134e",
          name: "Tea - Grapefruit Green Tea",
          description:
            "massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "d80f0bf6-0620-46a3-8739-04a6204da895",
          name: "Pepper - Green, Chili",
          description:
            "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.imageUrl} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
