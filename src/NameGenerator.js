import { useState } from "react";

export default function NameGenerator() {
  const firstNames = ["Tlaloc", "Perun", "Orion", "Cerus", "Rowan", "Shlok"];
  const lastNames = ["Osian", "Noveau", "Morrigan", "Oakenstead", "Biorix"];

  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  function generateName() {
    const randomFirst =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    setName(`${randomFirst} ${randomLast}`);
    setCopied(false); // reset copied state when new name is generated
  }

  function copyName() {
    if (name) {
      navigator.clipboard.writeText(name);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // hide message after 1.5s
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Random Name Generator</h2>
      <button onClick={generateName}>Generate Name</button>
      {name && (
        <>
          <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>{name}</p>
          <button onClick={copyName}>Copy Name</button>
          {copied && <p style={{ color: "green" }}>Copied!</p>}
        </>
      )}
    </div>
  );
}
