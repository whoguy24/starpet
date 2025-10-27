//Import Modules
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { listenToContacts } from "../firebase/contacts";
import styles from "./Contacts.module.css";

// Component Function
function Contacts() {

    // Redux Variables
    const dispatch = useDispatch();

    const contacts = useSelector(store => store.contacts);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Fetch Firestore Collections
    useEffect(() => {
        dispatch({ type: "FETCH_CONTACTS" });
    }, [dispatch]);

    // Add Firestore Listener for Automatic Updates
    useEffect(() => {
        const unsubscribe = listenToContacts();
        return () => unsubscribe();
    }, []);

    const handleCreateContact = async (e) => {
        e.preventDefault();
        try {

            // await createContact({ firstName, lastName, email, phone });

            // Create Contact Record in Firestore
            dispatch({ type: "CREATE_CONTACT", 
                payload: { first_name: firstName, last_name: lastName, email: email, phone: phone } 
            });

        } catch (error) {
            console.error("Failed to add document:", error);
        }
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
                <button type="submit" onClick={handleCreateContact}>Add Contact</button>
            </form>

            <table border="1" cellPadding="8" cellSpacing="0" className={styles.contactsTable}>
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
                    {
                        contacts?.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.first_name}</td>
                                <td>{contact.last_name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>Del</td>
                            </tr>
                        ))
                    }
                  
                </tbody>
            </table>
        </div>
    );

};

// Export Component
export default Contacts;