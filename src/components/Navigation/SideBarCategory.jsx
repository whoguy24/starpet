import styles from "./SideBarCategory.module.css";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";

function SideBarCategory({ title, menu, route }) {
    const { pathname } = useLocation();

    const categoryActive = pathname.startsWith(route);
    const activeItem = pathname.split("/")[3];

    return (
        <div className={styles.container}>
            <List
                subheader={
                    <Link className={styles.link} to={route}>
                        <ListSubheader
                            sx={{
                                width: "100%",
                                fontWeight: "bold",
                                fontSize: 14,
                                lineHeight: 2,
                                mb: 0,
                                mt: 0,
                                px: 2,
                                color: categoryActive ? "var(--color-primary)" : "inherit",
                                textDecoration: categoryActive ? "underline" : "none",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            {title}
                        </ListSubheader>
                    </Link>
                }
                sx={{
                    width: "100%",
                    p: 0,
                    mb: 2,
                    "& .MuiListItemButton-root": {
                        width: "100%",
                        mb: 0.5,
                        px: 4,
                        fontSize: 12,
                        "&:hover": {
                            bgcolor: "var(--color-tertiary)",
                        },
                    },
                }}
            >
                <Divider variant="fullWidth" />
                {/* {menu.map((menuItem) => (
                    <ListItemButton
                        key={menuItem.key}
                        component={Link}
                        to={route + "/" + menuItem.key}
                        selected={activeItem === menuItem.key}
                        sx={{
                            width: "100%",
                            mb: 0.5,
                            px: 4,
                            fontSize: 12,
                            color: "text.primary",
                            textDecoration: "none",
                            "&.Mui-selected": {
                                color: "white",
                                fontWeight: "bold",
                                bgcolor: "var(--color-primary)",
                            },
                            "&.Mui-selected:hover": {
                                bgcolor: "var(--color-primary)",
                                color: "white",
                            },
                            "&:hover": {
                                bgcolor: "var(--color-hover)",
                            },
                        }}
                    >
                        {menuItem.plural}
                    </ListItemButton>
                ))} */}
            </List>
        </div>
    );
}

export default SideBarCategory;
