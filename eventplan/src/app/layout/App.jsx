import Dasnboard from "../../features/event/dashboard/dashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="app">
      <h1>
        <div>
          <NavBar />
          <Container className="main">
            <Dasnboard />
          </Container>
        </div>
      </h1>
    </div>
  );
}

export default App;
