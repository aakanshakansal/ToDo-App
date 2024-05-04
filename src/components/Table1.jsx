function Table1() {
  let todoName = "Go To College";
  let todoItem = "06/06/2024";
  return (
    <div className="container ">
      <div className="row final-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoItem}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger final-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table1;
