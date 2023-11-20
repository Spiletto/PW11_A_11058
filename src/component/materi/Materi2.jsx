import React from "react";
import { useState } from "react";
const Materi2 = () => {
    const [list, setList] = useState([]);

    const [namaMatakuliah, setNamaMatakuliah] = useState("");
    const [namaDosen, setNamaDosen] = useState("");
    const [umur, setUmur] = useState(17);

    const hobbyMuda = [
        "Saya suka bermain ",
        "Saya suka ngoding",
        "Saya suka makan",
    ];
    const hobbyTua = [
        "Saya suka bekerja ",
        "Saya suka ngoding",
        "Saya suka lembur",
    ];
    const kurangUmur = () => {
        setUmur(umur - 1);
    };
    const tambahUmur = () => {
        setUmur(umur + 1);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        setList((dataSebelumnya) => {
        const newData = {
            namaMatakuliah: namaMatakuliah,
            namaDosen: namaDosen,
        };

        return [...dataSebelumnya, newData];
    });
    setNamaMatakuliah("");
    setNamaDosen("");
};
    return (
        <div className="p-3">
            <h1 className="mb-4">Berfokus Pada Implementasi UseState</h1>
            <div className="row align-item-center">
                <div className="col-md-6">
                    <div className="d-flex justify-content-start align-item-center">
                <div>
                <h5 className="text-start mb-3 mt-2">
                    Contoh Lain Pengunaan UseState
                </h5>
                <h5 className="text-start">
                    Umur Saya: {umur}, dan saya{" "}
                    {umur <= 25 ? "saya masih muda" : "saya sudah tua"}.
                </h5>
                <div className="d-flex justify-content-start">
                    <button className="btn btn-primary me-2"
onClick={kurangUmur}>
                    Kurang Umur
                    </button>
                    <button className="btn btn-primary" onClick={tambahUmur}>
                    Tambah Umur
                    </button>
                    </div>
                    <p className="text-start mt-2 ms-1 mb-0">Hobi: </p>
                    <ul>
                        {umur <= 25
                            ? hobbyMuda.map((item, index) => (
                                <li className="text-start" key={index}>
                                    {item}
                                </li>
                            ))
                        : hobbyTua.map((item, index) => (
                            <li className="text-start" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <form className="p-2" onSubmit={submitHandler}>
                <h5 className="text-start">List Matakuliah</h5>
                <div className="col-md-6">
                    <label
                        htmlFor="validationCustom01"
                        className="form-label d-block text-start"
                    >
                    Nama Matakuliah
                </label>
                <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={namaMatakuliah}
                onChange={(e) => setNamaMatakuliah(e.target.value)}
                required
                />
                </div>
        <div className="col-md-6">
        <label
        htmlFor="validationCustom02"
        className="form-label d-block text-start"
        >
        Nama Dosen
        </label>
        <input
        type="text"
        className="form-control"
        id="validationCustom02"
        required
        value={namaDosen}
        onChange={(e) => setNamaDosen(e.target.value)}
        />
        </div>
        <div className="col-12 ms-0 text-start mt-3">
            <button className="btn btn-primary" type="submit">
                Submit form
            </button>
        </div>
        </form>
        <h5 className="text-start mt-4">Isi Data Matakuliah</h5>
        <ul>
            {list.map((item, index) => (
                <li key={index} className="text-start">
                Nama Matakuliah {item.namaMatakuliah} - Nama Dosen{" "}
                {item.namaDosen}
                </li>
            ))}
        </ul>
    </div>
</div>
</div>
);
};

export default Materi2;