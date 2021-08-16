import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>This page does not exit fam!</h2>
      <Link to="/">Go home </Link>
    </div>
  )
}

export default NotFound