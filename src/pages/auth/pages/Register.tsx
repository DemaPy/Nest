import React, { useState } from "react";
import { register } from "../../../services/auth/api/register";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const payload = {
    email,
    password,
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <button
        onClick={() => {
          register(payload).then((data) => {
            location.href = '/auth/verify-email'
          });
        }}
      >
        Register
      </button>
    </div>
  );
};
