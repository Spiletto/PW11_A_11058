import React, { useState } from "react";

function Game2() {
  const [toDoList, setList] = useState([]);
  const options = ["Penting", "Biasa", "Tidak Penting"];

  const [nama, setNama] = useState("");
  const [priority, setPriority] = useState("");
  const [catatan, setCatatan] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setList((dataSebelumnya) => {
      const newData = {
        nama: nama,
        priority: priority,
        catatan: catatan,
      };

      return [...dataSebelumnya, newData];
    });
    
    setNama("");
    setPriority("");
    setCatatan("");

  };


  return (
    <div className="p-5">
      <h1>Simple To-Do List</h1>
      <form className="row mt-5" onSubmit={submitHandler}>
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
          
          <label htmlFor="inputNama" className="form-label">
            Pilih Priority
          </label>

          <select
            className="form-select"
            id="inputNama"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >

            <option value="" disabled hidden selected>
              Pilih Priority
            </option>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-3 text-start">
          
          <label htmlFor="inputNama" className="form-label">
            Catatan
          </label>
          
          <textarea
            className="form-control"
            placeholder="Isi Catatan To-Do List"
            id="inputNama"
            value={catatan}
            style={{ height: "150px"}}
            onChange={(e) => setCatatan(e.target.value)}
            required
          />
        </div>

        <div className="col-md-12 text-start">
          <button className="btn btn-primary mt-4">Tambah To-Do List</button>
        </div>
      </form>

      <div className="row mt-4">
        {toDoList.map((item, index) => (
          <div className="col-md-4 mb-3 mt-2" key={index}>
            <div
              className={`card ${
                item.priority === "Penting"
                  ? "border-red"
                  : item.priority === "Biasa"
                  ? "border-green"
                  : "border-black"
              }`}
            >
              <div
                className={`card-header text-light text-bold text-center ${
                  item.priority === "Penting"
                    ? "bg-red"
                    : item.priority === "Biasa"
                    ? "bg-green"
                    : "bg-black"
                }`}
              >
                {item.priority}
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.nama}</h5>
                <p className="card-text">{item.catatan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game2