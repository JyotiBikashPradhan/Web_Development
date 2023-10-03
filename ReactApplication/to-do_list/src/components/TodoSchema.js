import React from "react";
import Button from "react-bootstrap/Button";

function TodoSchema() {
  return (
    <div className="d-flex gap-2">
      <Button className="field" variant="primary" size="sm">
        view all
      </Button>
      <Button  className="field" variant="primary" size="sm">
        view done
      </Button>
      <Button className="field" variant="primary" size="sm">
        view todo
      </Button>
    </div>
  );
}

export default TodoSchema;
