import React from 'react';
import useForm from '../hooks/useForm';
import '../styles/JobApplicationForm.css';

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (isNaN(values.phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be a valid number';
  }
  if ((values.position === 'Developer' || values.position === 'Designer') && !values.experience) {
    errors.experience = 'Relevant Experience is required';
  } else if ((values.position === 'Developer' || values.position === 'Designer') && (isNaN(values.experience) || values.experience <= 0)) {
    errors.experience = 'Relevant Experience must be a number greater than 0';
  }
  if (values.position === 'Designer' && !values.portfolioUrl) {
    errors.portfolioUrl = 'Portfolio URL is required';
  } else if (values.position === 'Designer' && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(values.portfolioUrl)) {
    errors.portfolioUrl = 'Portfolio URL is invalid';
  }
  if (values.position === 'Manager' && !values.managementExperience) {
    errors.managementExperience = 'Management Experience is required';
  }
  if (!values.skills || !Object.values(values.skills).some(skill => skill)) {
    errors.skills = 'At least one skill must be selected';
  }
  if (!values.interviewTime) {
    errors.interviewTime = 'Preferred Interview Time is required';
  }

  return errors;
};

const JobApplicationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolioUrl: '',
    managementExperience: '',
    skills: {
      javascript: 'true',
      css: '',
      python: '',
      react: '',
      nodejs: '',
      
    },
    interviewTime: '',
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validate
  );

  const onSubmit = () => {
    alert(`Form Submitted:\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="form">
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>Applying for Position</label>
        <select name="position" value={values.position} onChange={handleChange}>
          <option value="">Select Position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {errors.position && <p className="error">{errors.position}</p>}
      </div>
      {(values.position === 'Developer' || values.position === 'Designer') && (
        <div>
          <label>Relevant Experience (Years)</label>
          <input
            type="number"
            name="experience"
            value={values.experience}
            onChange={handleChange}
          />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>
      )}
      {values.position === 'Designer' && (
        <div>
          <label>Portfolio URL</label>
          <input
            type="text"
            name="portfolioUrl"
            value={values.portfolioUrl}
            onChange={handleChange}
          />
          {errors.portfolioUrl && <p className="error">{errors.portfolioUrl}</p>}
        </div>
      )}
      {values.position === 'Manager' && (
        <div>
          <label>Management Experience</label>
          <textarea
            name="managementExperience"
            value={values.managementExperience}
            onChange={handleChange}
          ></textarea>
          {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
        </div>
      )}
      <div>
        <label>Additional Skills</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="skills.javascript"
              checked={values.skills.javascript}
              onChange={handleChange}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="skills.css"
              checked={values.skills.css}
              onChange={handleChange}
            />
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              name="skills.python"
              checked={values.skills.python}
              onChange={handleChange}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              name="skills.react"
              checked={values.skills.react}
              onChange={handleChange}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              name="skills.nodejs"
              checked={values.skills.nodejs}
              onChange={handleChange}
            />
            Node.js
          </label>
        </div>
        {errors.skills && <p className="error">{errors.skills}</p>}
      </div>
      <div>
        <label>Preferred Interview Time</label>
        <input
          type="datetime-local"
          name="interviewTime"
          value={values.interviewTime}
          onChange={handleChange}
        />
        {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;

