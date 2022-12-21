import "./App.css";
import Task from "./Task";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

function ListTask(props) {

  return (
    <div className="ListTask">
      {props.tasks.map((task, i) => {
        return <Task key={i} taskData={task}></Task>;
      })}
    </div>
  );
}

export default connect(mapStateToProps)(ListTask);
