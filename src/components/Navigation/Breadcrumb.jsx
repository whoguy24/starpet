// Import Modules
import styles from "./Breadcrumb.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Component Function
function Breadcrumb() {
    // Define Hooks
    const { pathname } = useLocation();

    // Define Redux State
    const animals = useSelector((state) => state.animals);
    const contacts = useSelector((state) => state.contacts);

    // Initialize Path Array
    const pathArray = pathname.split("/").filter(Boolean);

    // Transform Each Object in Path Array
    const breadcrumbs = pathArray.map((segment, index) => {
        // Store Absolute Path
        let path = "/" + pathArray.slice(0, index + 1).join("/");

        // Human Readable Label
        let label = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        // If Path Object is Firestore ID, Find Name From Redux Store
        if (/^[A-Za-z0-9]{20,}$/.test(segment)) {
            let table = pathArray[1];
            let record;
            if (table === "animals") {
                record = animals.find((document) => document.id === segment);
                label = record?.name;
            } else if (table === "contacts") {
                record = contacts.find((document) => document.id === segment);
                label = `${record?.first_name} ${record?.last_name}`;
            }
        }
        return { label, path };
    });

    // Render DOM
    return (
        <>
            {pathname !== "/home" && (
                <>
                    {breadcrumbs.map((breadcrumb, idx) => (
                        <span key={breadcrumb.path}>
                            {idx > 0 && <span>/</span>}
                            <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                        </span>
                    ))}
                </>
            )}
        </>
    );
}

// Export Component Function
export default Breadcrumb;
