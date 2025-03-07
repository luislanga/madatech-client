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

export const Table = () => {
  const tasks: any = useFetchTasks();
  const { mutateAsync: deleteTaskFn, isPending: isDeleteTaskPending } =
    useDeleteTask();

  const handleEditClick = (id: string) => {
    alert(`Editing task with ID: ${id}`);
  };

  const handleDeleteClick = async (id: string) => {
    try{
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
              <ActionButton disabled={isDeleteTaskPending} onClick={() => handleEditClick(task.id)}>
                <GoPencil />
              </ActionButton>
              <ActionButton disabled={isDeleteTaskPending} onClick={() => handleDeleteClick(task.id)}>
                <FaRegTrashCan />
              </ActionButton>
            </ActionsCell>
          </TableRow>
        ))}
      </tbody>
    </TableMain>
  );
};
