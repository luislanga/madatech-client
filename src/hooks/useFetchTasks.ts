import { useQuery } from "@tanstack/react-query";
import { useApi } from "../api";

const fetchTasks = async (api: any) => {
  const response = await api.get("/tasks");
  const tasks = response.data
  return tasks;
};

export const useFetchTasks = () => {
  const api = useApi();
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(api),
  });
};