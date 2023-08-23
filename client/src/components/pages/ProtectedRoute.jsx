import ComposeBlog from "./ComposeBlog";

const ProtectedRoute = (props) => {

  return <div>
    { true && <ComposeBlog />}
  </div>;
};

export default ProtectedRoute;
