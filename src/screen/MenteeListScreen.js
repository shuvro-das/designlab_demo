import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsersmentee } from "../actions/UserAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import { USER_DETAILS_RESET } from "../constants/userConstants";

export default function MenteeListScreen(props) {
  const userListMentee = useSelector((state) => state.userListMentee);
  const { loading, error, usersmentee } = userListMentee;

  //   const userDelete = useSelector((state) => state.userDelete);
  //   const {
  //     loading: loadingDelete,
  //     error: errorDelete,
  //     success: successDelete,
  //   } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsersmentee());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "3rem" }}>
      <h1>Mentee List</h1>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Mobile Number</th>
              <th>INSTITUTE NAME</th>
              <th>ENROLLMENT NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {usersmentee.map((usersmentee) => (
              <tr key={usersmentee._id}>
                <td>{usersmentee._id}</td>
                <td>{usersmentee.name}</td>
                <td>{usersmentee.email}</td>
                <td>{usersmentee.mobilenumber}</td>
                <td>{usersmentee.instituteName}</td>
                <td>{usersmentee.enrollmentNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
