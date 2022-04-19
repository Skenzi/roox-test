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
          <input type="text" value={formData.name} readOnly={!isEdit} onChange={handlerFormData('name')} />
          {errors.name ? <div>{errors.name}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.username} readOnly={!isEdit} onChange={handlerFormData('username')} />
          {errors.username ? <div>{errors.username}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.email} readOnly={!isEdit} onChange={handlerFormData('email')} />
          {errors.email ? <div>{errors.email}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.street} readOnly={!isEdit} onChange={handlerFormData('street')} />
          {errors.street ? <div>{errors.street}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.city} readOnly={!isEdit} onChange={handlerFormData('city')} />
          {errors.city ? <div>{errors.city}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.zipCode} readOnly={!isEdit} onChange={handlerFormData('zipCode')} />
          {errors.zipCode ? <div>{errors.zipCode}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.phone} readOnly={!isEdit} onChange={handlerFormData('phone')} />
          {errors.phone ? <div>{errors.phone}</div> : null}
        </div>
        <div className="form-group">
          <input type="text" value={formData.website} readOnly={!isEdit} onChange={handlerFormData('website')} />
          {errors.website ? <div>{errors.website}</div> : null}
        </div>
        <textarea value={formData.comment} onChange={handlerFormData('comment')} />
      </div>
      <button type="submit">Submit</button>
    </form>

  );
}

export default ProfileForm;
