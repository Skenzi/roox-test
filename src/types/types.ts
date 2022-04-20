/* eslint no-unused-vars: "off" */
import React from 'react';

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

export interface UsersProp {
    users: User[],
    stateFetchData: string,
}

export interface UsersProps extends UsersProp {
    setActiveUser: React.Dispatch<React.SetStateAction<User | null>>
}

export interface ProfileProps {
    user: User | null,
}

export interface SidebarMenuProps {
    sortUsers: (type: string) => void,
}

export interface Errors {
    [key: string]: string | undefined,
    name?: string,
    username?: string,
    email?: string,
    street?: string,
    city?: string,
    zipCode?: string,
    phone?: string,
    website?: string,
}

export interface FormData {
    [key: string]: string,
    name: string,
    username: string,
    email: string,
    street: string,
    city: string,
    zipCode: string,
    phone: string,
    website: string,
    comment: string,
}

export interface ProfileFormProps {
    isEdit: Boolean,
    formData: FormData,
    errors: Errors,
    onSubmit: (e: any) => void,
    handlerFormData: (property: string) => (e: any) => void,
}
