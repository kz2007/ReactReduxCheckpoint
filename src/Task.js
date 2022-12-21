import "./App.css";
import DelTask from "./DelTask";
import IsDoneChangeTask from "./IsDoneChangeTask";

function Task(props) {
  let data = props.taskData;
  return (
    <div className="Task">
      <h3>
        {" "}
        <IsDoneChangeTask taskId={data.id}></IsDoneChangeTask>
        {data.description}{" "}
      </h3>
      <small>#{data.id}</small>
      <DelTask taskId={data.id}></DelTask>
    </div>
  );
}

export default Task;
