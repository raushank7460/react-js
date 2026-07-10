import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Add ya Update Todo
  const handleSubmit = () => {
    if (text.trim() === "") return;

    if (editId !== null) {
      // Update Todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text: text } : todo
      );

      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Add Todo
      const newTodo = {
        id: Date.now(),
        text: text,
      };

      setTodos([...todos, newTodo]);
    }

    setText("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Edit Todo
  const editTodo = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "220px",
          marginRight: "10px",
        }}
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <hr />

      {todos.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid gray",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <span>{todo.text}</span>

            <div>
              <button onClick={() => editTodo(todo)}>Edit</button>

              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;