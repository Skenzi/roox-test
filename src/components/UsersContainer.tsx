import React from "react";
import { UsersProp } from "../types/types";

const UsersContainer = ({ users }: UsersProp) => {
    return <div className="col">
        <h1>Список пользователей</h1>
        <div>Container</div>
    </div>
};

export default UsersContainer;
