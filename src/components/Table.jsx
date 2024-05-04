function Table() {
  let todoName = "Buy Milk";
  let todoItem = "04/06/2024";
  return (
    <div className="container ">
      <div className="row final-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoItem}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger final-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
