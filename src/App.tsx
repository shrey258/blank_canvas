import "./App.css";

import localUsers from "./local.json";

// const API_BASE_URL =
//   "https://gist.githubusercontent.com/barbinbrad/13609dd592e31d8307dec955889e174d/raw/d9a29d9ff4053e5539e57bdd9e75c9fe527a0096/inbox.json";

// type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// type ApiOptions = {
//   method?: HttpMethod;
//   body?: unknown;
// };

// async function api<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
//   const { method = "GET", body } = options;
//   const headers = new Headers({
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   });

//   const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//     method,
//     headers,
//     body: body !== undefined ? JSON.stringify(body) : undefined,
//   });

//   if (!response.ok) {
//     const message = await response.text();
//     throw new Error(message || `Request failed with status ${response.status}`);
//   }

//   return (await response.json()) as T;
// }

type User = {
  id: string;
  from: string;
  address: string;
  time: string;
  message: string;
  subject: string;
  tag: string;
  read: string;
};

// function getUsers(): Promise<User[]> {
//   return api<User[]>('')
// }

function App() {
  const users: User[] = localUsers;

  return (
    <main className="app-shell">
      <section className="welcome">
        <div className="users-pane">
          <p className="eyebrow">blank_canvas</p>
          <h1>Fresh slate.</h1>
          <div className="users-list">
            {users.map((user) => (
              <div
                key={user.id}
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: user.read === "true" ? "lightgrey" : "white",
                }}
              >
                <h3>{user.from}</h3>
                <p>
                  <strong>{user.subject}</strong>
                </p>
                <p>{user.message}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mail-section">
          
        </div>
      </section>
    </main>
  );
}

export default App;
