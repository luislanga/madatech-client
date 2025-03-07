import { useState, useRef } from "react";
import { useCreateTask } from "../../hooks/useCreateTask";
import { GenericModal } from "../GenericModal/GenericModal";
import { Container, Form, Input, Select } from "./styles";
import { Button } from "../Button/Button";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { handleCreateTask } from "./handleCreateTask";
import { FormBlock } from "../GenericModal/styles";

interface CreateTaskModalProps {
  onClose: () => void;
}

export const CreateTaskModal = ({ onClose }: CreateTaskModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pendente",
  });
  const { mutateAsync: createTaskFn, isPending } = useCreateTask();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    handleCreateTask(
      formData.title,
      formData.description,
      formData.status,
      onClose,
      createTaskFn
    );
  };

  return (
    <GenericModal
      title="Criar Tarefa"
      closer={onClose}
      isSubmitting={isPending}
    >
      {!isPending ? (
        <Container>
          <Form ref={formRef}>
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
            Criar
          </Button>
        </Container>
      ) : (
        <LoadingSpinner color="dark" />
      )}
    </GenericModal>
  );
};
