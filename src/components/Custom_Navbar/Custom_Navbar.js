import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarText,
  NavLink,
  Modal,
  Button,
  Container,
  Form,
  Input,
  Label,
  Row,
  FormGroup,
} from "reactstrap";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "firebase/compat/auth";
import { db } from "../../index";

function Custom_Navbar() {
  const navigate = useNavigate();
  const [modallogin, setmodallogin] = useState(false);
  const [formlogin, setformlogin] = useState(true);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const login_by_firebase = async () => {
    const temp = collection(db, "User");
    let x = await getDocs(temp);
    let status = false;
    console.log(x);
    x.forEach((doc) => {
      if (doc.data().username == username && doc.data().password) {
        status = true;
        alert("login success");
        setTimeout(() => {
          navigate(`/${doc.data().role}`);
        }, 1000);
      }
    });
    if (status == false) {
      alert("username / password error !");
    }
  };

  const register_by_firebase = async () => {
    const temp = collection(db, "User");
    const register_data = {
      username: username,
      password: password,
      role: "user",
    };
    console.log(register_data);
    if (username != "" && password != "") {
      let x = await addDoc(temp, register_data);
      if (x != null || x != undefined) {
        alert("register success");
        setformlogin(!formlogin);
      }
    } else {
      alert("error input invalid");
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar
        style={{ background: "#3390FF" }}
        dark
        expand="md"
        fixed="top"
        full
        light
      >
        <NavbarBrand href="/">PSU RABFANG</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem> */}
            <NavLink href="/mentalhealth_test">Mental Health Test</NavLink>
            <NavLink href="/satisfaction_form">Satisfaction Form</NavLink>
            {/* </NavItem> */}
          </Nav>
          <NavbarText>
            <Button
              color="success"
              onClick={() => {
                setmodallogin(true);
              }}
            >
              Login
            </Button>
          </NavbarText>
        </Collapse>
        <Modal
          isOpen={modallogin}
          toggle={() => {
            console.log(!modallogin);
            setmodallogin(!modallogin);
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30vh",
              padding: 20,
              justifyContent: "center",
            }}
          >
            {formlogin == true ? (
              <Form>
                <h2>login</h2>
                <Row>
                  <Label> username :</Label>
                  <Input
                    type="text"
                    style={{ margin: 10, width: "30vh" }}
                    onChange={(event) => {
                      setusername(event.target.value);
                    }}
                  ></Input>
                </Row>
                <Row>
                  <Label> password :</Label>
                  <Input
                    type="password"
                    style={{ margin: 10, width: "30vh" }}
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                  ></Input>
                </Row>
                <Button
                  onClick={async () => {
                    login_by_firebase();
                  }}
                  style={{ margin: 10 }}
                >
                  login
                </Button>
                <Button
                  onClick={() => {
                    setformlogin(false);
                  }}
                  style={{ margin: 10 }}
                >
                  register
                </Button>
              </Form>
            ) : (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2>Register</h2>
                <FormGroup>
                  <Label> username :</Label>
                  <Input
                    type="text"
                    style={{ width: "30vh" }}
                    onChange={(event) => {
                      setusername(event.target.value);
                    }}
                  ></Input>
                </FormGroup>

                <FormGroup>
                  <Label> email :</Label>
                  <Input type="email" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> password :</Label>
                  <Input
                    type="password"
                    style={{ width: "30vh" }}
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label> confirm password :</Label>
                  <Input type="password" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> faculty :</Label>
                  <Input type="text" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> major :</Label>
                  <Input type="text" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> year :</Label>
                  <Input type="nunber" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> phone :</Label>
                  <Input type="number" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> birthday :</Label>
                  <Input type="password" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <FormGroup>
                  <Label> address :</Label>
                  <Input type="password" style={{ width: "30vh" }}></Input>
                </FormGroup>
                <Button
                  style={{ margin: 10 }}
                  onClick={() => {
                    register_by_firebase();
                  }}
                >
                  sign up
                </Button>
                <Button
                  onClick={() => {
                    setformlogin(!formlogin);
                  }}
                  style={{ margin: 10 }}
                >
                  {" "}
                  Cancel
                </Button>
              </Form>
            )}
          </Container>
        </Modal>
      </Navbar>
    </div>
  );
}

export default Custom_Navbar;
