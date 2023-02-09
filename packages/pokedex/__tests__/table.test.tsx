import Home from "../pages/index";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { useRouter } from 'next/router';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Table from "../component/Table";

jest.mock('next/router', () => require('next-router-mock'));
const mock_store = {
  pokemon:{
    allData:[],
    data:[],
    count:0
  },
  pokemonDetail:{
    name: "mew",
    height: "2 feet",
    weight: "3kg",
    location_area_encounters: "Canto",
  },
}
const columns = [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "super-app-theme--header",

    colSpan: 12,
  },
];
const mockStore = configureStore([thunk]);
const store = mockStore(mock_store);
describe("pokedex-list", () => {
  it("renders the list successfully", () => {
    const handleRowClick = jest.fn();
    render(
    <Provider store={store}>
      <Table
      count={mock_store.pokemon.count}
      rows={mock_store.pokemon.data}
      column={columns}
      pageSize={20}
      rowsPerPageOptions={[10]}
      onRowClick={handleRowClick}
      getRowId={(row: any) => row.name}
      />
    </Provider>);
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });

  it("renders pagination successfully", () => {
    const handleRowClick = jest.fn();
    render( <Provider store={store}>
      <Table
      count={mock_store.pokemon.count}
      rows={mock_store.pokemon.data}
      column={columns}
      pageSize={20}
      rowsPerPageOptions={[10]}
      onRowClick={handleRowClick}
      getRowId={(row: any) => row.name}
      />
    </Provider>);
    expect(screen.getByTestId("data-pagination")).toBeInTheDocument();
  });
});
