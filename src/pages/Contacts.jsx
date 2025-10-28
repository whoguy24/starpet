//Import Modules
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Contacts.module.css";
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
} from "../redux/reducers/contacts.reducer";

// Component Function
function Contacts() {
  // Define Redux Hooks
  const dispatch = useDispatch();

  // Define Redux State
  const { data: contacts, loading } = useSelector((state) => state.contacts);

  // Define Local State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Create Contact Handler
  function handleCreateContact(e) {
    e.preventDefault();
    if (firstName && lastName && email && phone) {
      dispatch({
        type: CREATE_CONTACT,
        payload: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
        },
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    }
  }

  // Delete Contact Handler
  const handleDeleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: { id } });
  };

  // Render DOM
  return (
    <div className={styles.contactsContainer}>
      <form onSubmit={handleCreateContact} className={styles.newContactForm}>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>

      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        className={styles.contactsTable}
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export Component
export default Contacts;
