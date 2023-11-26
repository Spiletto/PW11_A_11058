import React, { useState } from "react";
import { toast } from "react-toastify";

const Game1 = () => {
  const [gameStart, setGameStart] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(0);

  const notifySuccess = () => {
    toast.success("Berhasil Menebak Angka!");
  };

  const resetGame = () => {
    setGameStart(false);
    setGuessCount(0);
    setAnswer(generateRandomNumber());
    setInput("");
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const startGame = (event) => {
    event.preventDefault();
    if (!gameStart) {
      setGameStart(true);
      setGuessCount(0);
      setAnswer(generateRandomNumber());
    }
  };

  const checkGuess = (event) => {
    event.preventDefault();
    if (!gameStart) {
      startGame(event);
    } else {
      if (guessCount < 4) {
        if (input === "") {
          toast.error("Input Tidak Boleh Kosong");
          return;
        } else if (guessCount === 3 && parseInt(input, 10) !== answer) {
          toast.error("Kesempatan Anda Habis");
        } else if (parseInt(input, 10) < answer) {
          toast.error("Nilai Inputan Terlalu Kecil");
        } else if (parseInt(input, 10) > answer) {
          toast.error("Nilai Inputan Terlalu Besar");
        }
        setGuessCount(guessCount + 1);
      }

      if (parseInt(input, 10) === answer && gameStart) {
        notifySuccess();
        setGuessCount(4);
        setGameStart(false);
      }

      if (guessCount === 4 || !gameStart) {
        resetGame();
      }

      setInput("");
    }
  };

  return (
    <div className="p-5">
      <h1>Number Guessing Game</h1>
      <ol className="text-start ms-2 mt-4">
        <li>Each player gets 4 chances to guess</li>
        <li>Number range is between 1 - 10</li>
        <li>You can reset the number after 4 wrong answers</li>
      </ol>

      <form className="row" onSubmit={checkGuess}>
        {/* Input Section */}
        <div className="col-md-6 ms-4 mt-5">
          {guessCount === -1 || (
            <>
              <label htmlFor="validationCustom01" className="mb-2 d-block text-start">
                Input Angka
              </label>
              <input
                type="number"
                className="form-control"
                id="validationCustom01"
                placeholder="Input Angka 1 - 10"
                autoComplete="off"
                disabled={guessCount === 4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </>
          )}
        </div>

        {/* Display Section */}
        <div className="col-md-6 d-block text-start ms-4 mt-4">
          {gameStart ? `Nilai Aslinya Adalah ${answer}` : "Silahkan Mulai Permainan"}
        </div>

        <div className="col-md-6 d-block text-start ms-4 mt-4">
          {guessCount === -1 ? "" : `Jumlah Tebakan ${guessCount}`}
        </div>

        {/* Button Section */}
        <div className="col-md-6 d-flex justify-content-start">
          {guessCount === -1 ? (
            <button className="btn btn-success btn ms-4 mt-4" onClick={startGame}>
              Mulai Permainan
            </button>
          ) : guessCount < 4 ? (
            <button className="btn btn-primary btn ms-4 mt-4" onClick={checkGuess}>
              Tebak Angka
            </button>
          ) : (
            <button className="btn btn-danger btn ms-4 mt-4" onClick={resetGame}>
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Game1;
