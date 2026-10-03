import DynamicButton from "./components/DynamicButton";
import StatusMessage from "./components/StatusMessage";
import TodoList from "./components/TodoList";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <h1>React Assignment</h1>

      <h2>Task 1: Dynamic Styling Based on State</h2>
      <DynamicButton />

      <h2>Task 2: Conditional Styling Based on Props</h2>
      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <StatusMessage status="warning" />

      <h2>Task 3: Todo List</h2>
      <TodoList />

      <h2>Task 4: Landing Page</h2>
      <LandingPage />
    </div>
  );
}

export default App;