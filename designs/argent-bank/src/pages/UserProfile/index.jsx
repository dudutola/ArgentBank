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
    <main classNameName="main bg-dark">
      <div classNameName="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <Profile />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account__content--wrapper">
          <h3 className="account__title">Argent Bank Checking (x8349)</h3>
          <p className="account__amount">$2,082.79</p>
          <p className="account__amount--description">Available Balance</p>
        </div>
        <div className="account__content--wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account__content--wrapper">
          <h3 className="account__title">Argent Bank Savings (x6712)</h3>
          <p className="account__amount">$10,928.42</p>
          <p className="account__amount--description">Available Balance</p>
        </div>
        <div className="account__content--wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account__content--wrapper">
          <h3 className="account__title">Argent Bank Credit Card (x8349)</h3>
          <p className="account__amount">$184.30</p>
          <p className="account__amount--description">Current Balance</p>
        </div>
        <div className="account__content--wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};
