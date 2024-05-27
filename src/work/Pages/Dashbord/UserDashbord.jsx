import React, { useContext } from "react";
import { AuthContext } from "../../ContextApi/UserContext";
import { useNavigate } from "react-router-dom";

const UserDashbord = () => {
  const { refresh, setRefresh } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("captify-user");
    navigate("/auth/login");
    setRefresh(setRefresh(refresh + 1));
  };

  return (
    <div className="mx-20">
      <h1> User Dashboard</h1>
      <button
        onClick={() => {
          handleLogout();
        }}
        className="customBtn1"
      >
        Logout
      </button>
      <h1 className="mt-96">this page under work</h1>
    </div>
  );
};

export default UserDashbord;
