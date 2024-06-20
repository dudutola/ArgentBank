import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useUpdateUsernameMutation } from "../../services/userApi";
import { profileSlice } from "./profileSlice";
import "../../styles/components/_profile.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.profile.userName) || "";
  const [updateUsername, { isLoading, isError }] = useUpdateUsernameMutation();
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEditing) {
      setNewUsername("");
    }
  }, [username, isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
    setError(null);
  };

  const validateUsername = (newUsername, username) => {
    if (newUsername === '') {
      return "Please enter a username.";
    }
    if (newUsername === username) {
      return "New username cannot be the same as the current username.";
    }
    if (newUsername.length < 4) {
      return "Username must be at least 4 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateUsername(newUsername, username);
    if (validationErrors) {
      setError(validationErrors);
      return;
    }

    try {
      const usernameResponse = await updateUsername({ userName: newUsername }).unwrap();
      dispatch(profileSlice.actions.updateUsername({ userName: usernameResponse.body.userName }));
      setError(null);
      setIsEditing(false);
    } catch (error) {
      setError("Failed to update username. Please try again.");
    }
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setIsEditing(false);
      setError(null);
    }
  };

  return (
    <>
      {!isEditing ? (
        <button
          onClick={handleEditClick}
          className="edit-button"
        >
          Edit Name
        </button>
      ) : (
        <>
        <div className="backdrop" onClick={handleBackdropClick}></div>
        <div className="modal" style={{ display: isEditing ? "block" : "none" }}>
          <div className="modal__content">
            <div className="flex-close">
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <form onSubmit={handleSubmit} className="modal__content--form">
              <p className="current-username">Current username: {username}</p>
              <div className="input-wrapper">
                <label htmlFor="newUsername">
                  New Username
                  <input
                    type="text"
                    placeholder="Enter new username"
                    id="newUsername"
                    onChange={(event) => setNewUsername(event.target.value)}
                  />
                </label>
              </div>
              {(error || isError) && <p className="username-error">{error}</p>}
              <button type="submit" className="sign-in-button">
                {isLoading ? "Loading..." : "Update username"}
              </button>
            </form>

          </div>
        </div>
        </>
      )}
    </>
  );
};
