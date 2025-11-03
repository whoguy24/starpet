//Import Modules
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Contacts.module.css";

// Component Function
function Contacts() {
  // Define Redux Hooks
  const dispatch = useDispatch();

  // Define Redux State
  const contacts = useSelector((state) => state.contacts);

  // Define Local State
  const [contactsTable, setContactsTable] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setContactsTable(contacts);
  }, [contacts]);

  // Create Contact Handler
  function handleCreateContact(e) {
    e.preventDefault();
    if (firstName && lastName && email && phone) {
      dispatch({
        type: "CREATE_CONTACT",
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

  function handleFieldChange(contactID, field, value) {
    setContactsTable((prev) =>
      prev.map((contact) =>
        contact.id === contactID ? { ...contact, [field]: value } : contact
      )
    );
  }

  // Save Contact Handler
  const handleSaveContact = (contact) => {
    dispatch({ type: "UPDATE_CONTACT", payload: contact });
    alert("Record was successfully saved!");
  };

  // Delete Contact Handler
  const handleDeleteContact = (contact) => {
    dispatch({ type: "DELETE_CONTACT", payload: contact });
  };

  // Render DOM
  return (
    <div className={styles.contactsContainer}>
      {/* Hide for now */}
      {/* <form onSubmit={handleCreateContact} className={styles.newContactForm}>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactsTable?.map((contact) => (
            <tr key={contact.id}>
              <td>
                <input
                  value={contact.first_name || ""}
                  onChange={(e) =>
                    handleFieldChange(contact.id, "first_name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  value={contact.last_name || ""}
                  onChange={(e) =>
                    handleFieldChange(contact.id, "last_name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  value={contact.email || ""}
                  onChange={(e) =>
                    handleFieldChange(contact.id, "email", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  value={contact.phone || ""}
                  onChange={(e) =>
                    handleFieldChange(contact.id, "phone", e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleSaveContact(contact)}
                >
                  Save
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

// Export Component
export default Contacts;
