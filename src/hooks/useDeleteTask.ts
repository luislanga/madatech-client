import { useMutation } from "@tanstack/react-query";
import { useApi } from "../api";
import { queryClient } from "../main";

const deleteTask = async (taskId: string, api: any) => {
  const response = await api.delete(`/task/${taskId}`);
  return response.data;
};

export const useDeleteTask = () => {
  const api = useApi();
  return useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId, api),
    onSuccess(_, taskId: string) {
      queryClient.setQueryData(["tasks"], (data: any) => {
        return data.filter(
          (task: any) => task.id !== taskId
        );
      });
    },
  });
};
