import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:5000/api/workouts/");
      const jsonData = await response.json();
      console.log(jsonData);

      if (response.ok) {
        setWorkouts(jsonData);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </>
  );
}

export default Home;
