import styles from "./AnimalsList.module.css";

import { useState } from "react";

import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

import TableHeader from "../Layout/TableHeader";
import AnimalsNew from "./AnimalsNew";

function AnimalsList() {
    const animals = useSelector((state) => state.animals);

    const [newDialog, setNewDialog] = useState(false);

    const columns = [
        {
            field: "enum_type",
            headerName: "Type",
            width: 150,
            editable: true,
        },
        {
            field: "enum_category",
            headerName: "Category",
            width: 150,
            editable: true,
        },
        {
            field: "enum_breed",
            headerName: "Breed",
            width: 150,
            editable: true,
        },
        {
            field: "name",
            headerName: "Name",
            width: 150,
            editable: true,
        },
        {
            field: "enum_sex",
            headerName: "Sex",
            width: 150,
            editable: true,
        },
        {
            field: "enum_flag",
            headerName: "Flag",
            width: 150,
            editable: true,
        },
    ];

    function handleOnNew() {
        setNewDialog(true);
    }

    function handleDialogClose() {
        setNewDialog(false);
    }

    return (
        <div className={styles.container}>
            <TableHeader title={"Animals"} imageURL={"/assets/cards/home/animals.png"} onNew={handleOnNew} />
            <DataGrid
                rows={animals}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            <AnimalsNew open={newDialog} onClose={setNewDialog} />
        </div>
    );
}

export default AnimalsList;
