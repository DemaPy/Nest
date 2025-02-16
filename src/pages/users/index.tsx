import { SharedComponents } from "../../components";
import { ServiceComponents } from "./components/service";
import { UiComponents } from "./components/ui";

const Users = () => {
  return (
    <>
      <ServiceComponents.GetUsers>
        {(users) => (
          <SharedComponents.List data={users}>
            {(user) => <UiComponents.User key={user.id} user={user} />}
          </SharedComponents.List>
        )}
      </ServiceComponents.GetUsers>
      <ServiceComponents.GetUser id="2">
        {(user) => <UiComponents.User user={user} />}
      </ServiceComponents.GetUser>
    </>
  );
};

export default Users;
