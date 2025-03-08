import { useToast } from "../../hooks/useToast";

export const handleEditTask = async (
  taskId: string,
  title: string,
  description: string,
  status: string,
  onClose: () => void,
  editTaskFn: (data: any) => Promise<void>
) => {
  try {
    const response: any = await editTaskFn({
      taskId,
      title,
      description,
      status,
    });
    const successMessage = "Tarefa editada com sucesso!";
    useToast(successMessage, "success");
    onClose();
  } catch (error: any) {
    const errorCode = error.response?.data?.message;
    const errorMessage = errorCode || "Erro ao editar tarefa.";
    useToast(errorMessage, "error");
  }
};
