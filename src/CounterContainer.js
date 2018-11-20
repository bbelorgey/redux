import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  compteur: state
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch({ type: "ADD" }),
  onAdd10: () => dispatch({ type: "ADD10" }),
  onRemove: () => dispatch({ type: "REMOVE" }),
  onRemove10: () => dispatch({ type: "REMOVE10" }),
  onReset: () => dispatch({ type: "RESET" })
});

const CounterComponent = 
  ({ compteur, 
      onAdd, 
      onAdd10, 
      onRemove, 
      onRemove10, 
      onReset 
  }) => (
  <div>
    <p>{compteur}</p>
    <button onClick={onAdd}>ADD</button>
    <button onClick={onAdd10}>ADD10</button>
    <button onClick={onRemove}>REMOVE</button>
    <button onClick={onRemove10}>REMOVE10</button>
    <button onClick={onReset}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);