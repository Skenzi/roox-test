import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Errors, FormData, ProfileProps } from '../types/types';
import MainHeader from './MainHeader';
import ProfileForm from './ProfileForm';
import ProfileHeader from './ProfileHeader';

const validate = (values: FormData) => {
  const errors: Errors = {};
  const keys = Object.keys(values);
  keys.forEach((key: string) => {
    if (values[key] === '' && key !== 'comment') {
      errors[key] = 'Обязательно к заполнению';
    }
  });
  return errors;
};

function ProfileContainer({ user }: ProfileProps) {
  const [formData, setFormData] = useState<FormData>({
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    street: user?.address.street || '',
    city: user?.address.city || '',
    zipCode: user?.address?.zipcode || '',
    phone: user?.phone || '',
    website: user?.website || '',
    comment: '',
  });

  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigation = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validate(formData);
    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      navigation('/', { replace: true });
    }
  };

  const handlerFormData = (property: string) => (e: any) => {
    setFormData({ ...formData, [property]: e.target.value });
  };

  return (
    <>
      <MainHeader titleText="Профиль пользователя">
        <ProfileHeader setIsEdit={setIsEdit} />
      </MainHeader>
      <div className="page__content">
        <ProfileForm
          isEdit={isEdit}
          errors={errors}
          formData={formData}
          onSubmit={onSubmit}
          handlerFormData={handlerFormData}
        />
      </div>
    </>
  );
}

export default ProfileContainer;
