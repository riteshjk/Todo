import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/actionType";
import Todo from "./Todo";
import TodoComplete from "./TodoComplete";
import TodoInprogress from "./TodoInprogress";
import TodoInput from "./TodoInput";
import Review from "./Review";

const Todos = () => {
  const data = useSelector((store) => store.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  let inProgress;
  let ToDO;
  let Done;
  let Check;

  if (data.length > 0) {
    inProgress = data.filter((el) => el.status === "In-Progress");
    ToDO = data.filter((el) => el.status === "Todo");
    Done = data.filter((el) => el.status === "Done");
    Check = data.filter((el) => el.status === "Review");
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <TodoInput />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "1", marginRight: "20px", backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>TODO</h2>
          {ToDO &&
            ToDO.map((el) => (
              <div key={el.id}>
                <Todo {...el} />
              </div>
            ))}
        </div>

        <div style={{ flex: "1", marginRight: "20px", backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            In-Progress
          </h2>
          {inProgress &&
            inProgress.map((el) => (
              <div key={el.id}>
                <TodoInprogress {...el} />
              </div>
            ))}
        </div>

        <div style={{ flex: "1", marginRight: "20px", backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Done</h2>
          {Done &&
            Done.map((el) => (
              <div key={el.id}>
                <TodoComplete {...el} />
              </div>
            ))}
        </div>

        <div style={{ flex: "1", backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Review</h2>
          {Check &&
            Check.map((el) => (
              <div key={el.id}>
                <Review {...el} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
