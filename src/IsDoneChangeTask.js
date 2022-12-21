import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import { isDoneChangeTask } from "./JS/Actions/actions";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    changeDone: (id) => dispatch(isDoneChangeTask(id)),
  };
};

function IsDoneChangeTask(props) {

  let handleSubmit = (e) => {
    e.preventDefault();
    props.changeDone({ id: props.taskId});
  };

  let iconColor;
  switch(props.tasks[props.tasks.map(item => item.id).indexOf(props.taskId)].isDone ){
    case true :
        iconColor =  "green";
        break;

    case false:
        iconColor = "red" ;
        break;

    default:
        iconColor = "red";
        break;
  }


  return (
    <div className="IsDoneChangeTask">
        <form onSubmit={handleSubmit}>

        <button type="submit">
          {" "}
          <FontAwesomeIcon 
            icon={faCircleCheck}
            style={{fontSize: "2em",
            color: iconColor,
            marginRight: "20px",}}
          />
        </button>

        </form>
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IsDoneChangeTask);
