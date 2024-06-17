import { useDispatch, useSelector } from "react-redux";
import { useProfileUserMutation } from "../../services/userApi";
import { useEffect } from "react";
import { loginSlice } from "../../features/Login/loginSlice";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [profileUser] = useProfileUserMutation();

  useEffect(() => {
    const profileFetch = async () => {
      try {
        const profileData = await profileUser({ token }).unwrap();
        dispatch(loginSlice.actions.setUserProfile(profileData));
      } catch (error) {
        console.log("No first and last name in the profile.")
      }
    }
    if (token) {
      profileFetch();
    }
  }, [token, profileUser, dispatch]);

  const firstName = useSelector((state) => state.login.firstName);
  const lastName = useSelector((state) => state.login.lastName);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
    </main>
  );
};
