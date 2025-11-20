import styles from "./SideBarItem.module.css";
import ListItemButton from "@mui/material/ListItemButton";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoute } from "../../utils/slugify";

function SideBarItem({ route, menuItem }) {
    const [active, setActive] = useState(false);

    const { pathname } = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (pathname.split("/")[3] === getRoute(menuItem.key)) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [pathname]);

    function handleListButton() {
        const newPath = route + "/" + getRoute(menuItem.key);
        navigate(newPath);
    }

    return (
        <ListItemButton
            key={menuItem.key}
            onClick={handleListButton}
            sx={{
                height: 32,
                m: 0,
                bgcolor: active && "var(--color-primary);",
                color: active && "#ffffffff",
                fontWeight: active && "bold",
            }}
        >
            {menuItem.plural}
        </ListItemButton>
    );
}

export default SideBarItem;
