import PageRoutes from "./components/PageRoutes";
import Navbar from "./components/Navbar"
import { AppContainer } from "./components/StyledComponents";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <PageRoutes />
    </AppContainer>
  );
}

export default App;
