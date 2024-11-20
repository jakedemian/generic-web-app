import React, { useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const getMessage = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/test`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Error fetching message");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, world!</h1>
      <button onClick={getMessage}>Get Message</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
