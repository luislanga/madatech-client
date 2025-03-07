import { useState } from "react";
import { CreateTaskModal } from "../components/CreateTaskModal/CreateTaskModal";
import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";
import { WidthContainer } from "../components/WidthContainer/WidthContainer";
import { Button } from "../components/Button/Button";
import { PageTitle } from "./styles";

export const Dashboard = () => {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);


  const handleOpenCreateTaskModal = () => {
    setIsCreateTaskModalOpen(true);
  };
  const handleCloseCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false);
  };


  return (
    <>
      <Header />
      <WidthContainer>
        <PageTitle>Tarefas</PageTitle>
        <Button onClick={handleOpenCreateTaskModal}>Criar Tarefa</Button>
        <Table />
        {isCreateTaskModalOpen && (
          <CreateTaskModal onClose={handleCloseCreateTaskModal} />
        )}
      </WidthContainer>
    </>
  );
};
