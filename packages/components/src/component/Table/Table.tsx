import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type RowData = { name: string; url: string };

type Props = {
  rows: RowData[];
  column: GridColDef<any | any | any>[];
  pageSize: number;
  rowsPerPageOptions: number[];
  onRowClick: ({ row }: { row: RowData }) => void;
  getRowId: (row: RowData) => string | number;
};

const Table = ({
  rows,
  column,
  pageSize,
  rowsPerPageOptions,
  onRowClick,
  getRowId,
}: Props) => {
  // const handleRowClick = () => {
  //   //   router.push(`/${row.name}`);
  // };

  console.log();

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={column}
        pageSize={pageSize}
        rowsPerPageOptions={[10]}
        // rowsPerPageOptions={rowsPerPageOptions}
        onRowClick={(row: any) => onRowClick(row)}
        getRowId={(row: RowData) => getRowId(row)}
      />
    </div>
  );
};

export default Table;
