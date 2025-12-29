import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideBarMenuItem from "./SideBarMenuItem";
import { pages } from "../../db/pages";
import ListSubheader from "@mui/material/ListSubheader";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SideBarCategory from "./SideBarCategory";

function SideBar() {
    return (
        <div className={styles.container}>
            {pages.map((category) => (
                <SideBarCategory key={category.id} category={category} />
            ))}
        </div>
    );
}

export default SideBar;
