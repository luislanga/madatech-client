import { GoPencil } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { Header } from "../components/Header/Header";
import { WidthContainer } from "../components/WidthContainer/WidthContainer";
import { useFetchTasks } from "../hooks/useFetchTasks";
import styled from "styled-components";
import { useDeleteTask } from "../hooks/useDeleteTask";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f4f4f9;
  color: #333;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #e0e0e0;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  color: #555;
`;

const ActionsCell = styled(TableCell)`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const Dashboard = () => {
  const tasks: any = useFetchTasks();
  const { mutateAsync: deleteTaskFn, isPending: isDeleteTaskPending } = useDeleteTask();


  const handleEditClick = (id: string) => {
    alert(`Editing task with ID: ${id}`);
  };

  const handleDeleteClick = (id: string) => {
    deleteTaskFn(id);
  };

  // Add a loading or error check before rendering
  if (!tasks || !tasks.data) {
    return <p>Loading tasks...</p>;
  }

  return (
    <>
      <Header />
      <WidthContainer>
        <h1>Tarefas</h1>
        <Table>
          <thead>
            <tr>
              <TableHeader>Title</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {tasks.data.map((task: any) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.status}</TableCell>
                <ActionsCell>
                  <ActionButton onClick={() => handleEditClick(task.id)}>
                    <GoPencil />
                  </ActionButton>
                  <ActionButton onClick={() => handleDeleteClick(task.id)}>
                    <FaRegTrashCan />
                  </ActionButton>
                </ActionsCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </WidthContainer>
    </>
  );
};
