import styles from "./AnimalsList.module.css";

import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

function AnimalsList() {
    const animals = useSelector((state) => state.animals);

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

    return (
        <div className={styles.container}>
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
        </div>
    );
}

export default AnimalsList;
