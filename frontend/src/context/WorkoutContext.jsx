import { useReducer } from "react";
import { createContext } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
