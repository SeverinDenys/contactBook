export default function Navbar(inputsValueData) {
  const onClickHandle = () => {
    console.log("Done clicked with input:", inputsValueData);
  };
  return (
    <nav className="Navbar">
      <button className=" Navbar__button Navbar__button--cancel">
        Cancel
      </button>
      <h1 className="Navbar__title">New Contact</h1>
      <button
        className="Navbar__button Navbar__button--done"
        onClick={onClickHandle}
      >
        Done
      </button>
    </nav>
  );
}
