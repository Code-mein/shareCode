import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Custom hook for mutating code
export const useMutateCode = () => {
  const queryClient = useQueryClient();

  // Define the mutation
  const mutation = useMutation({
    mutationFn: async ({ id, updatedData }) => {
      console.log(id,updatedData)
      // Make sure to pass id and updatedData correctly
      const { data } = await axios.put(
        `${import.meta.env.VITE_BASE_URL}code/${id}`,
        updatedData
      );
      return data; // Return the data from the response
    },
    onSuccess: () => {
      // Invalidate queries after mutation succeeds
      queryClient.invalidateQueries(['sheet']);
    },
    onError: (error) => {
      const route = error.request.responseURL.split("/")
      if(route[route.length-1] == "undefined"){
        console.log("Ignore")
      }else{
        console.error("Error mutating code:", error);
      }
    }
  });

  return {mutation}; // Return the mutation object
};
