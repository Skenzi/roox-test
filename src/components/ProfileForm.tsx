import React from 'react';
import cn from 'classnames';
import { ProfileFormProps } from '../types/types';

/*interface MappingNamesProperties {
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
};*/

function ProfileForm({
  formData, errors, onSubmit, handlerFormData, isEdit,
}: ProfileFormProps) {
  const classFormElement = cn('form-element', {
    'form-element--inactive': !isEdit,
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="form-box">
        <div className="form-group f-wrap">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className={`${classFormElement} ${errors.name ? 'form-element--error' : ''}`} value={formData.name} readOnly={!isEdit} onChange={handlerFormData('name')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="username" className="form-label">Username</label>
          <input id="username" type="text" className={`${classFormElement} ${errors.username ? 'form-element--error' : ''}`} value={formData.username} readOnly={!isEdit} onChange={handlerFormData('username')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="text" className={`${classFormElement} ${errors.email ? 'form-element--error' : ''}`} value={formData.email} readOnly={!isEdit} onChange={handlerFormData('email')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="street" className="form-label">Street</label>
          <input id="street" type="text" className={`${classFormElement} ${errors.street ? 'form-element--error' : ''}`} value={formData.street} readOnly={!isEdit} onChange={handlerFormData('street')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="city" className="form-label">City</label>
          <input id="city" type="text" className={`${classFormElement} ${errors.city ? 'form-element--error' : ''}`} value={formData.city} readOnly={!isEdit} onChange={handlerFormData('city')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="zipCode" className="form-label">Zip code</label>
          <input id="zipCode" type="text" className={`${classFormElement} ${errors.zipCode ? 'form-element--error' : ''}`} value={formData.zipCode} readOnly={!isEdit} onChange={handlerFormData('zipCode')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input id="phone" type="text" className={`${classFormElement} ${errors.phone ? 'form-element--error' : ''}`} value={formData.phone} readOnly={!isEdit} onChange={handlerFormData('phone')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="website" className="form-label">Website</label>
          <input id="website" type="text" className={`${classFormElement} ${errors.website ? 'form-element--error' : ''}`} value={formData.website} readOnly={!isEdit} onChange={handlerFormData('website')} />
        </div>
        <div className="form-group f-wrap">
          <label htmlFor="comment" className="form-label">Comment</label>
          <textarea id="comment" className={classFormElement} value={formData.comment} readOnly={!isEdit} onChange={handlerFormData('comment')} />
        </div>
      </div>
      <button className={`button float-r ${isEdit ? 'button--active' : 'button--inactive'}`} type="submit">Отправить</button>
    </form>
  );
}

export default ProfileForm;
