/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Navbar({
  onContactSave,
  onContactCancel,
  contacts,
}) {
  return (
    <>
      <nav className="Navbar">
        <Link to="/contactsPage" state={{ contacts }}>
          <button
            className=" Navbar__button Navbar__button--cancel"
            onClick={onContactCancel}
          >
            Cancel
          </button>
        </Link>
        <h1 className="Navbar__title">New Contact</h1>

        <button
          className="Navbar__button Navbar__button--done"
          onClick={onContactSave}
        >
          Done
        </button>
      </nav>
    </>
  );
}
