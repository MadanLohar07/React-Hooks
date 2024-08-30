import React, { useState } from "react";

function StateAsObject() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <>
      <h2>State as an Object</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        name="name"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Enter your age..."
        name="age"
        value={profile.age}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Enter your location..."
        name="location"
        value={profile.location}
        onChange={handleChange}
      />

      <p>
        {profile.name} is {profile.age} year old from {profile.location}
      </p>
    </>
  );
}

export default StateAsObject;
