import React from "react";
import { useState } from "react";

function TodoForm({ onSubmit, promptText, confirmText = "Submit" }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Call the onSubmit function
    onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput("");
    event.target.task.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-nowrap justify-content-center">
        <label className="mx-2 text-nowrap" htmlFor="task">
          {promptText}
        </label>

        <input
          className="mx-2 form-control input-lg"
          id="task"
          type="text"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="mx-2 btn btn-primary" type="submit">
          {confirmText}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
