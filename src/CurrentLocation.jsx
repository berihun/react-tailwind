import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
  const currentLocation = useLocation();

  return <h3>Current Path: {location.pathname}</h3>;
};

export default CurrentLocation;
