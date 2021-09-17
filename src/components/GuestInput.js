import React, { useState } from "react";

const GuestInput = () => {
  const [name, setName] = useState("Guest");

  const addName = () => {
    setName("new guest");
  };

  const handleChange = () => {
    console.log("clicked");
  };

  return (
    <>
      <div>
        <h3>Welcome {name} </h3>
      </div>
      <div>
        <form onSubmit={addName}>
          <label>
            Please enter your name for a personalized experience:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <div>
            <button>Enter Name</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GuestInput;
