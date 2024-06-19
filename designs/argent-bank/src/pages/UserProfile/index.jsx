import { useDispatch, useSelector } from "react-redux";
import { useProfileUserMutation } from "../../services/userApi";
import { useEffect } from "react";
import { profileSlice } from "../../features/Profile/profileSlice";

import { Profile } from "../../features/Profile";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [profileUser] = useProfileUserMutation();

  useEffect(() => {
    const profileFetch = async () => {
      try {
        const profileData = await profileUser({ token }).unwrap();
        dispatch(profileSlice.actions.setUserProfile(profileData));
      } catch (error) {
        console.log("No first and last name in the profile.")
      }
    }
    if (token) {
      profileFetch();
    }
  }, [token, profileUser, dispatch]);

  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <Profile />
      </div>
    </main>
  );
};
