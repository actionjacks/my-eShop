import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        //login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="./1200px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__conatainer">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
          <button
            className="login__registerButton"
            onClick={register}
            type="submit"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
