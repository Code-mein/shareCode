import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
export const useGetSheetByURL = () => {
  const params = useParams();
  const {
    data: sheet,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["sheet"],
    queryFn: async () => {
      // import.meta.env.VITE_BASE_URL
      // alert(import.meta.env.VITE_BASE_URL)
      try {
        
        const fetchSheet = await axios.get(
          import.meta.env.VITE_BASE_URL + "sheet/"+params.url
        );
        return fetchSheet.data;
      } catch (e) {
        return e;
      }
    },
  });

  return {
    sheet,
    isLoading,
    error,
    refetch
  };
};
