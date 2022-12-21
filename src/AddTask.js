import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "./JS/Actions/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (task) => dispatch(addTask(task)),
  };
};

function AddTask(props) {
  const [description, setDescription] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    props.addArticle({ id: Date.now(), description: description, isDone: false });
    setDescription("");
  };

  return (
    <div className="AddTask">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="AddTaskForm">
          <Form.Label style={{ color: "rgb(85, 85, 85)" }}>Add task</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Your task's description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add!
        </Button>
      </Form>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(AddTask);
