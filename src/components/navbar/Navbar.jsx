/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Navbar({ onContactSave, onContactCancel }) {
  return (
    <>
      <nav className="Navbar">
        <button
          className=" Navbar__button Navbar__button--cancel"
          onClick={onContactCancel}
        >
          Cancel
        </button>
        <h1 className="Navbar__title">New Contact</h1>
        <Link to="/contactsPage">
          <button
            className="Navbar__button Navbar__button--done"
            onClick={onContactSave}
          >
            Done
          </button>
        </Link>
      </nav>
    </>
  );
}
