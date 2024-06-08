import { useSelector } from "react-redux";
import { Login } from "../../features/Login";

export const User = () => {
  const user = useSelector((state) => state.user.userData);

  if (!user) {
    return <div>Nope</div>
  }

  return (
    <main className="main bg-dark">
       <div className="header">
        <h1>Welcome back<br />{user.name}</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <Login />
    </main>
  );
};
