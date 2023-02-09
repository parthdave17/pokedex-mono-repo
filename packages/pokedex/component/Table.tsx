import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { fetchPockenList, selectPokemonCount } from "../store/pokemon";
import { useDispatch, useSelector } from "react-redux";

const Paginate = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectPokemonCount);

  const callAPI = (page: any) => {
    dispatch<any>(fetchPockenList(page));
  };

  const pageChangeHandler = async (event: any, pageNumber: any) => {
    callAPI(pageNumber);
  };

  return (
    <div data-testid="data-pagination">
      <Pagination
        count={Math.floor(count / 20)}
        style={{ padding: 20, justifyContent: "center", display: "flex" }}
        onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
        color="primary"
      />
    </div>
  );
};

type RowData = { name: string; url: string };

type Props = {
  rows: RowData[];
  column: GridColDef<any | any | any>[];
  pageSize: number;
  rowsPerPageOptions: number[];
  count: number;
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
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <div data-testid="data-table" style={{ height: "90vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={column}
          pageSize={pageSize}
          rowsPerPageOptions={[10]}
          onRowClick={(row: any) => onRowClick(row)}
          getRowId={(row: RowData) => getRowId(row)}
          components={{
            Footer: Paginate,
          }}
        />
      </div>
    </div>
  );
};

export default Table;
