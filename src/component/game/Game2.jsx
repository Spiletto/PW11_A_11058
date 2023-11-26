import React, { useState } from "react";

function Game2() {
  const [toDoList, setList] = useState([]);
  const priorityOptions = ["Penting", "Biasa", "Tidak Penting"];

  const [nama, setNama] = useState("");
  const [priority, setPriority] = useState("");
  const [catatan, setCatatan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      nama: nama,
      priority: priority,
      catatan: catatan,
    };
    setList((dataSebelumnya) => [...dataSebelumnya, newTask]);
    
    setNama("");
    setPriority("");
    setCatatan("");
  };

  return (
    <div className="p-5">
      <h1>Simple To-Do List</h1>
      <form className="row mt-5" onSubmit={handleSubmit}>
        <div className="col-md-6 text-start">
          <label htmlFor="inputNama" className="form-label">
            Apa yang ingin dikerjakan?
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNama"
            placeholder="Nama To-Do List"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 text-start">
          <label htmlFor="inputPriority" className="form-label">
            Pilih Priority
          </label>
          <select
            className="form-select"
            id="inputPriority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled hidden>
              Pilih Priority
            </option>
            {priorityOptions.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-3 text-start">
          <label htmlFor="inputCatatan" className="form-label">
            Catatan
          </label>
          <textarea
            className="form-control"
            placeholder="Isi Catatan To-Do List"
            id="inputCatatan"
            value={catatan}
            style={{ height: "150px" }}
            onChange={(e) => setCatatan(e.target.value)}
            required
          />
        </div>

        <div className="col-md-12 text-start">
          <button className="btn btn-primary mt-4">Tambah To-Do List</button>
        </div>
      </form>

      <div className="row mt-4">
        {toDoList.map((task, index) => (
          <div className="col-md-4 mb-3 mt-2" key={index}>
            <div
              className={`card ${
                task.priority === "Penting"
                  ? "border-red"
                  : task.priority === "Biasa"
                  ? "border-green"
                  : "border-black"
              }`}
            >
              <div
                className={`card-header text-light text-bold text-center ${
                  task.priority === "Penting"
                    ? "bg-red"
                    : task.priority === "Biasa"
                    ? "bg-green"
                    : "bg-black"
                }`}
              >
                {task.priority}
              </div>
              <div className="card-body">
                <h5 className="card-title">{task.nama}</h5>
                <p className="card-text">{task.catatan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game2;