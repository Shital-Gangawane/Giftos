import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Saving2() {
  return (
    <div>
        <Container style={{ backgroundColor: "BlueViolet", borderRadius: "20px" }}>
          <Row>
            <Col className="m-5">
              <img
                src="./images/gifts.png"
                alt=""
                style={{ width: "400px", height: "400px" }}
              />
            </Col>
            <Col
              className="m-5"
              style={{ color: "white", textAlign: "center" }}
            >
              {" "}
              <h2 className="mt-5 fw-bold b-4">
                {" "}
                BEST SAVINGS ON
                <br />
                NEW ARRIVALS
              </h2>
              <p>
                But he who repels from pain, because all pains are not gained,
                runs away from them with hatred, so that it may happen that by
                the flattery of those who are present, the whole of us who are
                not worthy of him will do nothing, and that too. Who, blinded in
                mind.
              </p>
              <div className="d-flex flex-row mb-2">
                <div className="p-2">
                  <Button
                    variant=""
                    className="mx-auto d-block m-3 p-2 btn border"
                    style={{
                      backgroundColor: "white",
                      borderRadius:"-0px",
                      fontWeight: "bold",
                      width: "200px",
                    }}
                  >
                    Buy now
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    variant=""
                    className="mx-auto d-block m-3 p-2 btn border"
                    style={{
                      backgroundColor: "DarkOrchid",
                      borderRadius:"-0px",
                      fontWeight: "bold",
                      width: "200px",
                    }}
                  >
                    See More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

    </div>
  )
}
