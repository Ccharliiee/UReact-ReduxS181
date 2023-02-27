import { useSelector } from "react-redux";
import Counter from "./components/Counter";
// import Counterclass from "./components/Counterclass";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthed = useSelector((state) => state.authReducer.authed);

  return (
    <>
      {/* <Counterclass /> */}
      <Header />
      {!isAuthed && <Auth />}
      {isAuthed && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
