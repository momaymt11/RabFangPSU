import { useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Input,
  InputGroup,
  Label,
  Row,
  InputGroupText,
  Button,
  Col,
} from "reactstrap";
import Custom_Navbar from "../components/Custom_Navbar";

function Satisfaction_form() {
  // return <div>doctor_page</div>;
  let question = [
    { id: 1, title: "Hi, there! What's your name?", type: "str", ans: "" },
    {
      id: 2,
      title:
        "Please type down your email for receiving newsletters and benefits from us.",
      type: "str",
      ans: "",
    },
    {
      id: 3,
      title:
        "Do you have difficulty falling asleep because of your frustrated mind or worry over something?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Regularly"],
    },
    {
      id: 4,
      title: "Do you often feel irritated or annoyed by something?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Regularly"],
    },
    {
      id: 5,
      title:
        "Does it ever occur to you that you are so stressed out that you can't focus or do anything?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Regularly"],
    },
    {
      id: 6,
      title: "How often do you feel upset?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Regularly"],
    },
    {
      id: 7,
      title:
        "Have you ever feel like wanting to isolate yourself from other people?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Regularly"],
    },
    {
      id: 8,
      title:
        "How often do you have an headache on onside or pain at both of your temples?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Regularly"],
    },
    {
      id: 9,
      title: "How often do you feel unhappy and sombre?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 10,
      title: "How often do you feel hopeless?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 11,
      title: "How often do you feel worthless?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 12,
      title: "How often do you feel restless or anxious?อ10",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 13,
      title: "Do you feel that you have poor concentration?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 14,
      title:
        "How often do you feel so exhausted that you don't want do anything?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 15,
      title: "Have you ever experience when your heartbeat is racing so fast?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 16,
      title: "Do you have trembling voice, lips or hands when you are upset?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 17,
      title: "How often do you feel afraid of making mistakes?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 18,
      title: "Do you have aches or strains around your occiput or shoulders?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 19,
      title: "Are you easily excited with unfamiliar events?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "Yes,A lot"],
    },
    {
      id: 20,
      title: "Do you have dizziness or confusion?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot"],
    },
    {
      id: 21,
      title: "Do have less sex-drive?",
      type: "checkbox",
      ans: "",
      choice: ["Nope", "Sometime", "Often", "A lot of times"],
    },
  ];

  useEffect(() => {}, []);
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Custom_Navbar />
      <Container style={{ paddingTop: "100px" }}>
        <h1>Satisfaction Form</h1>
        <ui>
          {question.map((item) =>
            item["type"] == "str" ? (
              <Card
                key={item["id"]}
                style={{ padding: "10px", margin: "10px" }}
              >
                <CardTitle>
                  <div>
                    {" "}
                    {item["id"]}.) {item["title"]}
                  </div>
                </CardTitle>
                <CardBody>
                  <Input type="input" />
                </CardBody>
                <Button style={{ margin: "15px" }} outline color="primary">
                  submit
                </Button>
              </Card>
            ) : (
              <Card
                key={item["id"]}
                style={{ padding: "10px", margin: "10px" }}
              >
                <CardTitle>
                  <div>
                    {" "}
                    {item["id"]}.) {item["title"]}
                  </div>
                </CardTitle>
                <Container style={{ padding: "10px" }}>
                  {item["choice"].map((i) => (
                    <Container
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <input type={item["type"]}></input>
                      <span style={{ paddingLeft: "10px" }}>{i}</span>
                    </Container>
                  ))}
                </Container>
              </Card>
            )
          )}
        </ui>
      </Container>
      <Button outline color="primary" style={{ margin: "10px" }}>
        submit
      </Button>
    </Container>
  );
}

export default Satisfaction_form;
