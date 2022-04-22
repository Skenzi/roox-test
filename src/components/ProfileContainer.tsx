import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Errors, FormData, ProfileContainerProps } from '../types/types';
import ProfileForm from './ProfileForm';

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

function ProfileContainer({ user, isEdit }: ProfileContainerProps) {
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

  const [errors, setErrors] = useState<Errors>({});
  const navigation = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validate(formData);
    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log(JSON.stringify(formData));
      navigation('/', { replace: true });
    }
  };

  const handlerFormData = (property: string) => (e: any) => {
    setFormData({ ...formData, [property]: e.target.value });
  };

  return (
    <ProfileForm
      isEdit={isEdit}
      errors={errors}
      formData={formData}
      onSubmit={onSubmit}
      handlerFormData={handlerFormData}
    />
  );
}

export default ProfileContainer;
