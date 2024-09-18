import { Link } from "react-router-dom";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ContactsPage() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || []; // we need to take the values from localStorage
  // const alphabetArray = [
  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  // ];
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="contactsPage">
        <div className="contactsPageBtnHolder">
          <Link to="/contactBook">
            <button className="contactsPageBtnHolder__button">
              +
            </button>
          </Link>
        </div>

        <h1 className="contactsPage__title">Contacts</h1>

        <form action="" className="contactsForm">
          <input
            onChange={handleSearchChange}
            type="text"
            placeholder="Search"
            className="contactsForm__searchInput"
            value={searchValue}
          />
        </form>
        {contacts
          .sort((a, b) => {
            const firstContactName = a.firstName.toUpperCase();
            console.log("firstContact", firstContactName);
            const secondContactName = b.firstName.toUpperCase();
            console.log("secondContact", secondContactName );
            if (firstContactName < secondContactName) {
              return -1; 
            }
            if (firstContactName > secondContactName) {
              return 1;
            }
            return 0;
          })
          .filter((contact) => {
            if (searchValue === "") {
              return true;
            } else {
              const fullName =
                `${contact.firstName} ${contact.lastName}`.toLowerCase();
              return fullName.includes(searchValue.toLowerCase());
            }
          })
          .map(
            (item) =>
              item.id && (
                // If the contact does have an id - redirect to page with id
                <Link
                  to={`/contactPage/${item.id}`}
                  key={item.id}
                  className="link"
                >
                  <ContactInfo
                    contactName={`${item.firstName} ${item.lastName}`}
                  />
                </Link>
              )
          )}
      </div>
      <Sidebar />
    </>
  );
}
