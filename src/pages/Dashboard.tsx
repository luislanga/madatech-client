import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";
import { WidthContainer } from "../components/WidthContainer/WidthContainer";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <WidthContainer>
        <h1>Tarefas</h1>
        <Table />
      </WidthContainer>
    </>
  );
};
