import { useToast } from "../../hooks/useToast";

export const handleEditTask = async (
  title: string,
  description: string,
  status: string,
  onClose: () => void,
  createTaskFn: (data: {
    title: string;
    description: string;
    status: string;
  }) => Promise<void>
) => {
  try {
    const response: any = await createTaskFn({
      title,
      description,
      status,
    });
    const successMessage = "Tarefa criada com sucesso!";
    useToast(successMessage, "success");
    onClose();
  } catch (error: any) {
    const errorCode = error.response?.data?.message
    const errorMessage = errorCode || "Erro ao criar tarefa."
    useToast(errorMessage, "error");
  }
};
