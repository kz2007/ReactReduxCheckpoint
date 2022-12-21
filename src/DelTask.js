import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import { delTask } from "./JS/Actions/actions";

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    }
  }


const mapDispatchToProps = (dispatch) => {
  return {
    DelTaskb: (id) => dispatch(delTask(id)),
  };
};

function DelTask(props) {
  let handleSubmit = (e) => {
    e.preventDefault();
    props.DelTaskb({ id: props.taskId});
  };

  return (
    <div className="DelTask">
        <form onSubmit={handleSubmit}>

        <button  type="submit">
          {" "}
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{
              fontSize: "1em",
              color: "red" ,
              marginRight: "20px",
            }}
          />
        </button>


        </form>


    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DelTask);