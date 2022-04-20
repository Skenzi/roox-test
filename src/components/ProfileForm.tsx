import React from 'react';
import cn from 'classnames';
import { ProfileFormProps } from '../types/types';

interface MappingNamesProperties {
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

const mappingNames: MappingNamesProperties = {
  name: 'Name',
  username: 'User name',
  email: 'Email',
  street: 'Street',
  city: 'City',
  zipCode: 'Zip code',
  phone: 'Phone',
  website: 'Website',
  comment: 'Comment',
};

function ProfileForm({
  formData, errors, onSubmit, handlerFormData, isEdit,
}: ProfileFormProps) {
  const classFormElement = cn('form-element', {
    'form-element--inactive': !isEdit,
  });
  const dataKeys = Object.keys(formData);
  return (
    <form onSubmit={onSubmit}>
      <div className="form-box">
        {dataKeys.map((key) => {
          let component;
          if (key === 'comment') {
            component = (
              <div key={key} className="form-group">
                <label htmlFor={key} className="form-label">{mappingNames[key]}</label>
                <textarea id={key} className={`${classFormElement} form-element-textarea`} value={formData[key]} readOnly={!isEdit} onChange={handlerFormData(key)} />
              </div>
            );
          } else {
            component = (
              <div key={key} className="form-group">
                <label htmlFor={key} className="form-label">{mappingNames[key]}</label>
                <input id={key} type="text" className={`${classFormElement} ${errors[key] ? 'form-element--error' : ''}`} value={formData[key]} readOnly={!isEdit} onChange={handlerFormData(key)} />
              </div>
            );
          }
          return component;
        })}
      </div>
      <button className={`button float-r ${isEdit ? 'button--active' : 'button--inactive'}`} type="submit">Отправить</button>
    </form>
  );
}

export default ProfileForm;
