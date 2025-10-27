//Import Modules
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Component Function
function Contacts() {

    // Redux Variables
    const dispatch = useDispatch();

    // Fetch Firestore Collections
    useEffect(() => {
        dispatch({ type: "FETCH_CONTACTS" });
    }, []);

  // Render DOM
  return (
    <div>
        <h2>Contacts</h2>
    </div>
  );

};

// Export Component
export default Contacts;