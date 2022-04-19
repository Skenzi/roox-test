import React, { useState } from 'react';

interface Errors {
    name?: string,
    username?: '',
    email?: '',
    street?: '',
    city?: '',
    zipCode?: '',
    phone?: '',
    website?: '',
}

const validate = (values: {name: string}) => {
  const errors: Errors = {};
  if (values.name === '') {
    errors.name = 'Обязательно к заполнению';
  }
  return errors;
};

function ProfileForm() {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState<Errors>({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formErrors = validate(formData);
        if (Object.keys(formErrors).length !== 0) {
          setErrors(formErrors);
        } else {
          setErrors({});
        }
      }}
    >
      <div className="form-group">
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        {errors.name ? <div>{errors.name}</div> : null}
      </div>
      <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      {errors.username ? <div>{errors.name}</div> : null}
      <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      {errors.email ? <div>{errors.name}</div> : null}
      <input type="text" value={formData.street} onChange={(e) => setFormData({ ...formData, street: e.target.value })} />
      {errors.street ? <div>{errors.name}</div> : null}
      <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
      {errors.city ? <div>{errors.name}</div> : null}
      <input type="text" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
      {errors.zipCode ? <div>{errors.name}</div> : null}
      <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      {errors.phone ? <div>{errors.name}</div> : null}
      <input type="text" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
      {errors.website ? <div>{errors.name}</div> : null}
      <textarea value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
      <button type="submit">Submit</button>
    </form>

  );
}

export default ProfileForm;
