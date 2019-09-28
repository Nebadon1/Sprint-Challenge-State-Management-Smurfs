import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Get = props => {
  console.log("This are My Smurfs: ", props.smurfs);
  return (
    <div>
      <h4>Check the Console </h4>
      <button onClick={() => props.getData()}>
        Click here to display Smurfs
      </button>
      {/* {console.log('props from Get', props)} */}
    </div>
  );
};

const mapStateToProps = state => {
// console.log('from Get MSTP', state );

  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Get);
