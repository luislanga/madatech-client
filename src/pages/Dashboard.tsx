import { useState } from "react";
import { CreateTaskModal } from "../components/CreateTaskModal/CreateTaskModal";
import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";
import { WidthContainer } from "../components/WidthContainer/WidthContainer";

export const Dashboard = () => {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(true);

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
        <h1>Tarefas</h1>
        <Table />
        {isCreateTaskModalOpen && (
          <CreateTaskModal onClose={handleCloseCreateTaskModal} />
        )}
      </WidthContainer>
    </>
  );
};
