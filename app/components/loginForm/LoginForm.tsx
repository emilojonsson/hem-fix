"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Gör inloggningsanrop och få autentiseringstoken
      const loginResponse = await fetch("https://localhost:7167/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (loginResponse.ok) {
        const token = await loginResponse.json();
        localStorage.setItem("authToken", token);
        router.push("/tasks");
      } else {
        console.error("Inloggning misslyckades");
        // Visa ett felmeddelande eller gör något annat vid misslyckad inloggning
      }
    } catch (error) {
      console.error("Inloggning error:", error);
      // Hantera fel här
    }
  };

  return (
    <div>
      <h1>Inloggning</h1>
      <label>
        Användarnamn:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Lösenord:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Logga in</button>
    </div>
  );
};

export default LoginPage;
