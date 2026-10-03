import { useState } from "react";

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#222222",
        transition: "0.3s",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          borderBottom: "1px solid",
        }}
      >
        <h2>React Assignment</h2>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1>Build Better With React</h1>

        <p>
          Learn, build and create amazing web experiences with React.
        </p>

        <button style={{ marginTop: "20px", padding: "12px 24px" }}>
          Get Started
        </button>

        <section style={{ marginTop: "70px" }}>
          <h2>Why Learn React?</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <div>
              <h3>Components</h3>
              <p>Build reusable UI components.</p>
            </div>

            <div>
              <h3>State</h3>
              <p>Create interactive applications.</p>
            </div>

            <div>
              <h3>Props</h3>
              <p>Pass data between components.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;