import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Navbar,
  Row,
} from "reactstrap";
import Custom_Navbar from "../components/Custom_Navbar";
import { FaBeer } from "react-icons/fa";

function home_page() {
  return (
    <Container
      fluid
      style={{
        // background: "whitesmoke",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
      }}
    >
      <Custom_Navbar />
      <Container
        fluid="sm"
        style={{
          // background: "yellow",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          minHeight: "45vh",
          paddingTop: "35px",
        }}
      >
        <Container
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/people-waving-hand-illustration-concept_52683-29825.jpg?t=st=1651303381~exp=1651303981~hmac=511eaf76e32e0b25c9584884c63e44a59131451475c18dc4bb2e609c4a89a05b&w=900"
            width={"100%"}
          />
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            background: "white",
          }}
        >
          <Card>
            <CardBody>
              <h1> RubFangPSU ? </h1>
              <CardTitle>
                We are an online psychiatrist consultation platform for Prince
                of Songkla University students. Phuket Campus That allows you to
                discuss your concerns with a psychiatrist and psychologist
                through a private and safe meeting with your doctor. Discuss
                concerns with
              </CardTitle>
            </CardBody>
            <Button outline color="primary" style={{ margin: "8px" }}>
              Sign In
            </Button>
            <Button outline color="primary" style={{ margin: "8px" }}>
              Mental Health Test
            </Button>
          </Card>
        </Container>
      </Container>
      <div
        style={{
          background: "whitesmoke",
          display: "flex",
          flexDirection: "column",
          minHeight: "30vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <h2>How to use</h2>
          <span>You can quickly and easily access RubFangPSU in 3  steps.</span>
        </Container>

        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            height: "100px",
          }}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FaBeer />
            <span>Register</span>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FaBeer />
            <span>Do mental health test</span>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FaBeer />
            <a>Psychiatrist appointment</a>
          </Container>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Container>
          {/* <h1>????????????????????????????????????</h1> */}
        </Container>
      </div>
      <Container
        fluid
        style={{
          background: "#3390FF",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          bottom: "0",
          height: "80px",
          position: "absolute",
        }}
      >
        <h5>Copyright ?? 2022 , Prince of songkla university Phuket Campus</h5>
      </Container>
    </Container>
  );
}

export default home_page;
