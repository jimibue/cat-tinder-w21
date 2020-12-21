import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const FetchUser = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { authenticated, setUser } = useContext(AuthContext);

  useEffect(() => {
    // do axios call to check token, setloaded to true when done
    // with call
    checkUser();
  }, []);

  const checkUser = async () => {
    if (authenticated || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }

    try {
      const res = await axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log(err.response);
      console.log("invalid token");
    } finally {
      setLoaded(true);
    }
  };

  return loaded ? props.children : null;
};

export default FetchUser;
