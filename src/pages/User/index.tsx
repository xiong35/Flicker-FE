import "./index.scss";

import { useSetup } from "./hooks";
import TheBottomTabs from "../../components/TheBottomTabs";

type UserProps = {};

function User(props: UserProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="user">
      User
      <TheBottomTabs />
    </div>
  );
}

export default User;
