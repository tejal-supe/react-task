import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { updateRole } from "../../redux/userSlicer";
import Admin from "../admin";
import User from "../user";
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
  const role = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const changeRole = () => {
    if (role.role === "admin") {
      dispatch(updateRole("user"));
    } else {
      dispatch(updateRole("admin"));
    }
  };

  return (
    <div className="container">
        <header className="d-flex justify-content-between align-items-center mb-4">
                <h2>Dashboard</h2>
                <div>
                                <FaUserCircle size={30} onClick={changeRole} /><span className="ml-2">
                        {role.role==="admin"?"Switch to User":"Switch to Admin"}</span>   </div>
            </header>
     
      {role.role === "admin" ? <Admin /> : <User />}
    </div>
  );
};

export default Home;
