import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../api/getAll";
import { UserDTO } from "../../dto";
import { UserInterface } from "../../types";

const GetUsers = ({
  children,
}: {
  children: (props: UserInterface[]) => JSX.Element;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => getAll(UserDTO),
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error users...";
  }
  return children(data ?? []);
};

export default GetUsers;
