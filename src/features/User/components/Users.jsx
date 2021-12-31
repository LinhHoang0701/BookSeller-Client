import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserRole from "../../../components/UserRoles";
import { formatDate } from "../../../share/Date";
import { getAllUsers, searchUser } from "../userSlice";

const Users = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: getAllUsers.type });
  }, [dispatch]);
  const [value, setValue] = useState("");
  const handleSearchUser = (e) => {
    e.preventDefault();
    dispatch({
      type: searchUser.type,
      payload: value,
    });
  };
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="users-dashboard">
        <div className="sub-page">
          <div className="subpage-header">
            <h2>Users</h2>
          </div>
          <div className="mb-3">
            <form action="" onSubmit={handleSearchUser}>
              <div className="search-box inline-btn-box">
                <div className="input-text-block">
                  <input
                    autoComplete="off"
                    type="text"
                    id="search"
                    name="user"
                    className="input-text search-box"
                    placeholder="Type user name or email"
                    value={value}
                    onInput={handleChangeInput}
                  />
                  <button
                    className="input-btn custom-btn-primary md text-only icon-left "
                    type="submit"
                  >
                    <span className="btn-text">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="subpage-body">
            <div className="u-list">
              <p className="fw-1">{users.length} results</p>
              {users.map((user, index) => (
                <div key={index} className="mt-3 px-4 py-3 user-box">
                  <div className="text-black">Name</div>
                  <p className="fw-2">
                    {user.firstName} {user.lastName}
                  </p>
                  <label className="text-black">Email</label>
                  <p>{user.email}</p>
                  <label className="text-black">Email</label>
                  <p>{user.provider}</p>
                  <label className="text-black">Account Created</label>
                  <p>{formatDate(user.created)}</p>
                  <label className="text-black">Role</label>
                  <p>
                    <UserRole className="d-inline-block mt-2" user={user} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
