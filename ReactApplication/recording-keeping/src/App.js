import Header from "./component/Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UpdateIcon from "@mui/icons-material/Update";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeField, setActiveField] = useState("");

  function addData() {
    if (activeIndex !== -1) {
      const updatedData = [...data];
      updatedData[activeIndex] = form;
      setData(updatedData);
      setForm({});
      setActiveIndex(-1);
      setActiveField("");
    } else {
      setData([...data, form]);
      setForm({});
    }

    document.getElementById("name-input").focus();
  }

  const removeItem = (index) => {
    let arr = [...data];
    arr.splice(index, 1);
    setData(arr);
  };

  const removeAllItem = () => {
    setData([]);
  };

  return (
    <div className="App">
      <Header />

      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            id="name-input"
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            label="Name"
            variant="outlined"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                document.getElementById("email-input").focus();
              }
            }}
          />
          <TextField
            id="email-input"
            value={form.email || ""}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            label="Email"
            variant="outlined"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addData();
              }
            }}
          />
          <Button variant="contained" onClick={addData} color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4 style={{ color: "blue" }}>Name</h4>
          <h4 style={{ color: "blue" }}>Email</h4>
          <h4 style={{ color: "blue" }}>Actions</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack className="actions" direction="row" spacing={1}>
                <Button
                  className="remove"
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteForeverIcon />
                </Button>
                <Button
                  onClick={() => {
                    setForm(element);
                    setActiveIndex(index);
                    setActiveField("name");
                    document.getElementById("name-input").focus();
                  }}
                  variant="contained"
                  color="primary"
                >
                  <UpdateIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>

      <div className="removeAll">
        <Button onClick={removeAllItem} variant="contained" color="error">
          Remove All
          <DeleteForeverIcon />
        </Button>
      </div>
    </div>
  );
}

export default App;
