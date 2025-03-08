import { FaRegTrashCan } from "react-icons/fa6";
import {
  ActionButton,
  ActionsCell,
  TableCell,
  TableHeader,
  TableMain,
  TableRow,
} from "./styles";
import { GoPencil } from "react-icons/go";
import { useFetchTasks } from "../../hooks/useFetchTasks";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { useToast } from "../../hooks/useToast";
import { useState } from "react";
import { EditTaskModal } from "../EditTaskModal/EditTaskModal";

export const Table = () => {
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleOpenEditTaskModal = (task: any) => {
    setCurrentTask({ task });
    setIsEditTaskModalOpen(true);
  };
  const handleCloseEditTaskModal = () => {
    setIsEditTaskModalOpen(false);
  };

  const tasks: any = useFetchTasks();
  const { mutateAsync: deleteTaskFn, isPending: isDeleteTaskPending } =
    useDeleteTask();

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteTaskFn(id);
      useToast("Tarefa excluída com sucesso.", "success");
    } catch (error: any) {
      useToast("Erro ao excluir tarefa.", "error");
    }
  };

  if (!tasks || !tasks.data) {
    return <p>Loading tasks...</p>;
  }
  return (
    <>
      {isEditTaskModalOpen && (
        <EditTaskModal
          onClose={handleCloseEditTaskModal}
          currentTask={currentTask}
        />
      )}
      <TableMain>
        <thead>
          <tr>
            <TableHeader>Título</TableHeader>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Ações</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.data.map((task: any) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.status}</TableCell>
              <ActionsCell>
                <ActionButton
                  disabled={isDeleteTaskPending}
                  onClick={() => handleOpenEditTaskModal(task)}
                >
                  <GoPencil />
                </ActionButton>
                <ActionButton
                  disabled={isDeleteTaskPending}
                  onClick={() => handleDeleteClick(task.id)}
                >
                  <FaRegTrashCan />
                </ActionButton>
              </ActionsCell>
            </TableRow>
          ))}
        </tbody>
      </TableMain>
    </>
  );
};
