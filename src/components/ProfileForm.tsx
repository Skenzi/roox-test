import React from 'react';
import { Errors, FormData } from '../types/types';

interface ProfileFormProps {
    isEdit: Boolean,
    formData: FormData,
    errors: Errors,
    onSubmit: (e: any) => void,
    handlerFormData: (property: string) => (e: any) => void,
}

function ProfileForm({
  formData, errors, onSubmit, handlerFormData, isEdit,
}: ProfileFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className="form-element" value={formData.name} readOnly={!isEdit} onChange={handlerFormData('name')} />
          {errors.name ? <div>{errors.name}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={formData.username} readOnly={!isEdit} onChange={handlerFormData('username')} />
          {errors.username ? <div>{errors.username}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={formData.email} readOnly={!isEdit} onChange={handlerFormData('email')} />
          {errors.email ? <div>{errors.email}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={formData.street} readOnly={!isEdit} onChange={handlerFormData('street')} />
          {errors.street ? <div>{errors.street}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input id="city" type="text" value={formData.city} readOnly={!isEdit} onChange={handlerFormData('city')} />
          {errors.city ? <div>{errors.city}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">Zip code</label>
          <input id="zipcode" type="text" value={formData.zipCode} readOnly={!isEdit} onChange={handlerFormData('zipCode')} />
          {errors.zipCode ? <div>{errors.zipCode}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" value={formData.phone} readOnly={!isEdit} onChange={handlerFormData('phone')} />
          {errors.phone ? <div>{errors.phone}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" value={formData.website} readOnly={!isEdit} onChange={handlerFormData('website')} />
          {errors.website ? <div>{errors.website}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" value={formData.comment} readOnly={!isEdit} onChange={handlerFormData('comment')} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>

  );
}

export default ProfileForm;
