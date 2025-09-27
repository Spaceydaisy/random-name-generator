import { useState } from "react";

export default function NameGenerator() {
  const firstNames = ["Sangita", "Arjun", "Maya", "Ravi", "Ananya"];
  const lastNames = ["Sharma", "Patel", "Iyer", "Khan", "Das"];

  const [name, setName] = useState("");

  function generateName() {
    const randomFirst =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    setName(`${randomFirst} ${randomLast}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Random Name Generator</h2>
      <button onClick={generateName}>Generate Name</button>
      {name && <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>{name}</p>}
    </div>
  );
}
