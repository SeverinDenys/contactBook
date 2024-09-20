/* eslint-disable react/prop-types */

const alphabetArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function Sidebar({ onLetterSelect }) {
  const handleClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      onLetterSelect(event.target.innerText);
    }
  };
  return (
    <aside className="sidebar" onClick={handleClick}>
      {alphabetArray.map((letter) => (
        <button key={letter} className="sidebar__letter">
          {letter}
        </button>
      ))}
    </aside>
  );
}
