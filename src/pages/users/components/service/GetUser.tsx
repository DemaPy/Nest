import { useQuery } from "@tanstack/react-query";
import { UserInterface } from "../../types";
import { getOne } from "../../api/getOne";
import { UserDTO } from "../../dto";

const GetUser = ({
  id,
  children,
}: {
  id: string;
  children: (props: UserInterface | undefined) => JSX.Element;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => getOne(UserDTO, id),
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error...";
  }
  
  return children(data);
};

export default GetUser;
