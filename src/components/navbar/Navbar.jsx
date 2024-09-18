/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

export default function Navbar({
  onContactSave,
  onContactCancel,
  onEdit,
}) {
  const location = useLocation();
  const { contact } = location.state || {};
  const onDoneClick = () => {
    if (contact) {
      onEdit(contact.id)
    } else {
      onContactSave();
    }
  };
  return (
    <>
      <nav className="Navbar">
        <button
          className=" Navbar__button Navbar__button--cancel"
          onClick={onContactCancel}
        >
          Cancel
        </button>

        {contact ? (
          <h1 className="Navbar__title">Edit Contact</h1>
        ) : (
          <h1 className="Navbar__title">New Contact</h1>
        )}

        <button
          className="Navbar__button Navbar__button--done"
          onClick={onDoneClick}
        >
          Done
        </button>
      </nav>
    </>
  );
}
