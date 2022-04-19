import React, { useState } from 'react';
import { Errors, FormData } from '../types/types';
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

function ProfileContainer() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    phone: '',
    website: '',
    comment: '',
  });

  const [isEdit, setIsEdit] = useState<Boolean>(false);

  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validate(formData);
    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
    }
  };

  const handlerFormData = (property: string) => (e: any) => {
    setFormData({ ...formData, [property]: e.target.value });
  };

  return (
    <div className="row">
      <ProfileHeader setIsEdit={setIsEdit} />
      <ProfileForm
        isEdit={isEdit}
        errors={errors}
        formData={formData}
        onSubmit={onSubmit}
        handlerFormData={handlerFormData}
      />
    </div>
  );
}

export default ProfileContainer;
