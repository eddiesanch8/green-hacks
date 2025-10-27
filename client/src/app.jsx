export function Hello() {
  // this is code from materialize, you can see that the styling has been done with classnames
  // materialize has been pre-installed.
  //   if you are going to use components that require JS, you will need to use the UseEffect hook in react
  return (
    <div className="collection">
      <a href="#!" className="collection-item">
        <span className="badge">1</span>Alan
      </a>
      <a href="#!" className="collection-item">
        <span className="new badge">4</span>Alan
      </a>
      <a href="#!" className="collection-item">
        Alan
      </a>
      <a href="#!" className="collection-item">
        <span className="badge">14</span>Alan
      </a>
    </div>
  );
}
