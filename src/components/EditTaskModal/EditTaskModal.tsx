import { useState } from "react";
import { GenericModal } from "../GenericModal/GenericModal";
import { Container, Form, Input, Select } from "./styles";
import { Button } from "../Button/Button";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { handleEditTask } from "./handleEditTask";
import { FormBlock } from "../GenericModal/styles";
import { useEditTask } from "../../hooks/useEditTask";

interface EditTaskModalProps {
  onClose: () => void;
  currentTask: any;
}

export const EditTaskModal = ({ onClose, currentTask }: EditTaskModalProps) => {
  const [formData, setFormData] = useState({
    title: currentTask.task.title,
    description: currentTask.task.description,
    status: currentTask.task.status,
  });
  const { mutateAsync: editTaskFn, isPending } = useEditTask();

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    handleEditTask(
      currentTask.task.id,
      formData.title,
      formData.description,
      formData.status,
      onClose,
      editTaskFn
    );
  };

  return (
    <GenericModal
      title="Editar Tarefa"
      closer={onClose}
      isSubmitting={isPending}
    >
      {!isPending ? (
        <Container>
          <Form>
            <FormBlock>
              <span>Título</span>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Título da tarefa"
              />
            </FormBlock>
            <FormBlock>
              <span>Descrição</span>
              <Input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descrição da tarefa"
              />
            </FormBlock>
            <FormBlock>
              <span>Status</span>
              <Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="pendente">Pendente</option>
                <option value="em andamento">Em andamento</option>
                <option value="concluída">Concluída</option>
              </Select>
            </FormBlock>
          </Form>

          <Button type="button" disabled={isPending} onClick={handleSubmit}>
            Salvar
          </Button>
        </Container>
      ) : (
        <LoadingSpinner color="dark" />
      )}
    </GenericModal>
  );
};
