import { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo";

function App() {
  const [isLogin, setLogin] = useState(true);

  const click = () => {
    setLogin(!isLogin);
  };

  return (
    <>
      <div className="container">
        <Logo></Logo>
        <section className="input">
          <input
            hidden={isLogin}
            type="text"
            placeholder="Mobile Number or Email"
          ></input>
          <input hidden={isLogin} type="text" placeholder="Full Name"></input>
          <input
            type="email"
            placeholder="Phone Number,Username or Email"
          ></input>
          <input type="password" placeholder="Password"></input>
          <button>{isLogin ? "Log in" : "Sign up"} </button>
        </section>
        <footer className="footer">
          <h3>
            {isLogin ? `Don't have account?` : `have an account? `}
            <span onClick={click}>{isLogin ? "Sign up" : "Log in"}</span>
          </h3>
        </footer>
      </div>
    </>
  );
}

export default App;
