import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>There's nothing here!</p>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
