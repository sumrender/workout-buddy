import { useWorkoutContext } from "../hooks/useWorkoutContext";
import trashcan from "../assets/trash_icon.png";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:5000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) dispatch({ type: "DELETE_WORKOUT", payload: json });
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>
        <img height={20} src={trashcan} alt="delete-icon" />
      </span>
    </div>
  );
}

export default WorkoutDetails;
