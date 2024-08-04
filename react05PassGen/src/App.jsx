import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [spechar, setSpechar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (spechar) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, spechar]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, spechar, passwordGenerator]);

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputbox">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPassword}>Copy</button>
          </div>
          <div className="actions">
            <div>
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                onChange={(e) => {
                  setLength(parseInt(e.target.value, 10));
                }}
              />
              <label>Range: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={number}
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={spechar}
                onChange={() => {
                  setSpechar((prev) => !prev);
                }}
              />
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
