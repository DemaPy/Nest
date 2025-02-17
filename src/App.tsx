import { useState } from "react";
import "./App.css";
import Campaigns from "./pages/campaigns";
import Users from "./pages/users";
import { login } from "./services/auth/api/login";
import { LoginResponse } from "./services/auth/types/login";

function App() {
  const [user, setUser] = useState<LoginResponse['user'] | null>(null)
  return (
    <main>
      <Campaigns />
      <Users />
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <button onClick={() => {
       login().then(data => setUser(data.user));
      }}>Login</button>
    </main>
  );
}

export default App;
