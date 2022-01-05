
// Functional and/or class based components

// define our Event Component
function Event(props) {
  // return some UI
  return (
    <>
      <h2>{props.title}</h2>
    </>
  );
}

export default Event;
// When you name components, the naming is PascalCase

// camelCase  => hotDog
// PascalCase => HotDog
