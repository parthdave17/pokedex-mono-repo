import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  fetchPockenList,
  selectPokemonCount,
  selectPokemonListData,
} from "../store/pokemon";
import { wrapper } from "../store/configure";
import Table from "../component/Table";

//Types
export type RowData = { name: string; url: string };

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "super-app-theme--header",

    colSpan: 12,
  },
];

export default function Home() {
  const router = useRouter();
  const pokemonList = useSelector(selectPokemonListData);
  const count = useSelector(selectPokemonCount);

  const handleRowClick = ({ row }: { row: RowData }) => {
    router.push(`/${row.name}`);
  };
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      {pokemonList && (
        <Table
          count={count}
          rows={pokemonList}
          column={columns}
          pageSize={20}
          rowsPerPageOptions={[10]}
          onRowClick={handleRowClick}
          getRowId={(row: any) => row.name}
        />
      )}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(fetchPockenList(0));
      return {
        props: {},
      };
    }
);
