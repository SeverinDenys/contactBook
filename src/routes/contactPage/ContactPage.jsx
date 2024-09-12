 import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  const redirectToContactsPage = () => {
    navigate("/");
  };

 

  return (
    <div className="contactPage">
      <div className="contactPageHolder">
        <div className="contactPageBtnHolder">
          <button
            className="contactPageBtnHolder__button"
            onClick={redirectToContactsPage}
          >
            &lt;
          </button>

          <button className="contactPageBtnHolder__button">
            Edit
          </button>
        </div>

        <h1 className="contactPage__title">Name</h1>
      </div>
      
      <p className="contactPage__Phone"> +222222222</p>
      <p className="contactPage__Email"> somewhre@gmail.com</p>
      <p className="contactPage__Address">New York city</p>
      <p className="contactPage__Birthday">12.06.98</p>
    </div>
  );
}
