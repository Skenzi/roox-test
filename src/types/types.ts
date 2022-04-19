/* eslint no-unused-vars: "off" */
export interface User {
    name: string,
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
    address: {
        street: string,
        city: string,
        suite: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        },
    },
    id: number,
    email: string,
    phone: string,
    username: string,
    website: string,
}

export interface MappingSortProps {
    [key: string]: (arr: User[]) => User[],
    company: (arr: User[]) => User[],
    city: (arr: User[]) => User[],
}

export interface UsersProp {
    users: User[],
}

export interface SidebarMenuProps {
    sortUsers: (type: string) => void,
}
