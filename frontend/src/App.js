import Navbar from "./components/molecules/Navbar";
import PersonList from "./components/molecules/PersonList";
import MyRoutes from "./features/MyRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <MyRoutes />
      <PersonList />
    </div>
  );
}

export default App;
