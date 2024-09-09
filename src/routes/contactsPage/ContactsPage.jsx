export default function ContactsPage() {
  return (
    <div className="contactsPage">
      <div className="contactsPageBtnHolder">
        <button className="contactsPageBtnHolder__button">+</button>
      </div>

      <h1 className="contactsPage__title">Contacts</h1>

      <form action="" className="contactsForm">
        
        <input
          type="text"
          placeholder="Search"
          className="contactsForm__searchInput"
        />
      </form>
    </div>
  );
}
