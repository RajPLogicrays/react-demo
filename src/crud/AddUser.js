import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

function AddUser() {
  const [user, setUser] = useState({id: "",name: ""});

  //  Form Handl
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Post User Data
  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/data", user);
    e.preventDefault();
    setUser({ ...user, id: "", name: "" });
    window.location.href = "/user";
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <form action="" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="id">ID</label>
              <input
                name="id"
                autoComplete="off"
                onChange={handleInput}
                value={user.id}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="name">First Name</label>
              <input
                name="name"
                autoComplete="off"
                onChange={handleInput}
                value={user.name}
                required
              />
            </div>
            <Button color="primary" variant="outlined" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
