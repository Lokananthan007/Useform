import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
 import QRCode from 'qrcode.react';

const UserValidation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [qrCodeData, setQrCodeData] = useState('');

  const handleRegistration = (data) => {
    const qrCodetext = `${data.name} ${data.email} ${data.password} ${data.confirmpassword} ${data.course} ${data.birth} ${data.gender}`;

     setQrCodeData(qrCodetext);
    console.log(data);
  };

  const registerOptions = {
    name: {
      required: "Name is required"
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Email must end with @gmail.com'
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    confirmpassword: {
      required: "Confirm Password is required",
      validate: (value) => {
        const password = document.querySelector("input[name='password']").value;
        return value === password || "Passwords do not match";
      }
    },
    gender: {
      required: "Gender is required",
    },
    course:{
      required: "Course is required",
    },
    birth:{
      required: "Data Birth is required",
    }
  };

  return (
    <div className="container-fluid">
      <div className="row col-lg-6 col-md-6 col-sm-12">
        <form className="form" onSubmit={handleSubmit(handleRegistration)}>
          <div>
            <h1>Registration</h1>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label><br/>
            <input
              name="name"
              type="text"
              {...register('name', registerOptions.name)}
              className={errors.name ? "error-input" : ""}
            /><br/>
            <small className={`form-text ${errors.name ? "text-danger error-message" : ""}`}>
              {errors?.name && errors.name.message}
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label><br/>
            <input
              type="email"
              name="email"
              {...register('email', registerOptions.email)}
              className={errors.email ? "error-input" : ""}
            /><br/>
            <small className={`form-text ${errors.email ? "text-danger error-message" : ""}`}>
              {errors?.email && errors.email.message}
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label><br/>
            <input
              type="password"
              name="password"
              {...register('password', registerOptions.password)}
              className={errors.password ? "error-input" : ""}
            /><br/>
            <small className={`form-text ${errors.password ? "text-danger error-message" : ""}`}>
              {errors?.password && errors.password.message}
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label><br/>
            <input
              type="password"
              name="confirmpassword"
              {...register('confirmpassword', registerOptions.confirmpassword)}
              className={errors.confirmpassword ? "error-input" : ""}
            /><br/>
            <small className={`form-text ${errors.confirmpassword ? "text-danger error-message" : ""}`}>
              {errors?.confirmpassword && errors.confirmpassword.message}
            </small>
          </div>
          <div className="mb-3">
<label>Course</label><br/>
  <input type="checkbox" name="course" value="full" className="course"  {...register('course',registerOptions.course)}/>
  <span>full stack developer</span><br/>
  <input type="checkbox" name="course" value="designer" className="course" {...register('course',registerOptions.course)}/>
  <span>ui/ux designer</span><br/>
  <input type="checkbox" name="course" value="app" className="course" {...register('course',registerOptions.course)}/>
  <span>App Developer</span><br/>
  <small className={`form-text ${errors.course ? "text-danger error-message" : ""}`}>
              {errors?.course && errors.course.message}
  </small>
</div>
          <div className="  mb-3">
        <label className="form-label">Date Of Birth</label><br/>
        <input
          type="date"
          name="birth"
          {...register('birth', registerOptions.birth)}
          className={errors.password ? "error-input" : ""}
         
        /><br/>
        <small className={`form-text ${errors.birth ? "text-danger error-message" : ""}`}>
              {errors?.birth && errors.birth.message}
            </small>
      </div>

          <div className="mb-3">
            <label className="form-label">Gender</label><br/>
            <label className="gender">
              <input
                type="radio"
                name="gender"
                value="male"
                {...register('gender', registerOptions.gender)}
                className={errors.password ? "error-input" : ""}

              /> Male
            </label><br />
            <label className="gender">
              <input
                type="radio"
                name="gender"
                value="female"
                {...register('gender', registerOptions.gender)}
                className={errors.password ? "error-input" : ""}

              /> Female
            </label><br />
            {errors.gender && (
              <small className={`form-text ${errors.gender ? "text-danger error-message" : ""}`}>
              {errors?.gender && errors.gender.message}
  </small>
            )}
          </div>
           <div className="mb-3">
             <label className="form-label">QR Code</label><br />
             {qrCodeData && <QRCode value={qrCodeData} />}
           </div>
          <div className="mb-3">
            <button className={`btn ${errors.name || errors.email || errors.password || errors.confirmpassword || errors.gender || errors.course || errors.birth ? "error-button" : ""}`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserValidation;




