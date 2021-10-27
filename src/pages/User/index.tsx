
import "./index.scss";

import { useSetup } from "./hooks";


type UserProps = {
  
};

function User(props: UserProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="user">
      User
    </div>
  );
}

export default User;
