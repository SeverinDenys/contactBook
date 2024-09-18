 

export default function Sidebar() {
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
  return (
    <aside className="sidebar">
    {alphabetArray.map((letter) => (
      <button key={letter} className="sidebar__letter">
        {letter}
      </button>
    ))}
  </aside>
  )
}
