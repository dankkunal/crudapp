import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const editHandler = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  };

  const deleteHandler = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    navigate("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((employee) => {
                return (
                  <tr>
                    <td>{employee.id}</td>
                    <td>{employee.Name}</td>
                    <td>{employee.Age}</td>
                    <td>
                      <Link to={"/edit"}>
                        <Button
                          onClick={() =>
                            editHandler(
                              employee.id,
                              employee.Name,
                              employee.Age
                            )
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => deleteHandler()}>Delete</Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">No Data Found</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to={"/create"}>
          <Button variant="primary">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
