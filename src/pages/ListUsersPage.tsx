import React from "react";
import UsersContainer from "../components/UsersContainer";
import { UsersProp } from "../types/types";

const ListUsersPage = ({ users }: UsersProp) => {
    return <>
        <UsersContainer users={users} />
    </>
};

export default ListUsersPage;
