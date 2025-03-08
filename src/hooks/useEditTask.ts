import { useMutation } from "@tanstack/react-query";
import { useApi } from "../api";
import { queryClient } from "../main";

interface EditTaskVariables {
  taskId: string;
  title: string;
  description: string;
  status: string;
}

const editTask = async (variables: EditTaskVariables, api: any) => {
  const editTaskRequest = {
    title: variables.title,
    description: variables.description,
    status: variables.status,
  };
  const response = await api.put(`/task/${variables.taskId}`, editTaskRequest);
  return response.data;
};

export const useEditTask = () => {
  const api = useApi();
  return useMutation({
    mutationFn: (variables: EditTaskVariables) => editTask(variables, api),
    onSuccess(_, variables: EditTaskVariables) {
      queryClient.setQueryData(["tasks"], (data: any) => {
        return data.map((task: any) => {
          if (task.id === variables.taskId) {
            return {
              ...task,
              title: variables.title,
              description: variables.description,
              status: variables.status,
            };
          }
          return task;
        });
      });
    },
  });
};
