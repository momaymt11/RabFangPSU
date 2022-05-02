import { Container } from "reactstrap";
import Custom_Navbar from "../components/Custom_Navbar";

function user_page() {
  // return <div>doctor_page</div>;
  return (
    <Container>
      <Custom_Navbar />
      <Container style={{ paddingTop: "100px" }}>User</Container>
    </Container>
  );
}

export default user_page;
