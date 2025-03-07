import { useMutation } from "@tanstack/react-query";
import { useApi } from "../api";
import { queryClient } from "../main";

const createTask = async ({ title, description, status }: any, api: any) => {
    const createTaskRequest = {
      title,
      description,
      status
    };
    const response = await api.post("/task", createTaskRequest);
    return response.data;
  };

  export const useCreateTask = () => {
    const api = useApi();
    return useMutation({
      mutationFn: (variables: any) => createTask(variables, api),
      onSuccess(data, variables) {
        queryClient.setQueryData(["tasks"], (oldTasks: any[]) => [
          ...oldTasks,
          {
            title: variables.title,
            description: variables.description,
            status: variables.status,
          },
        ]);
      },
    });
  };