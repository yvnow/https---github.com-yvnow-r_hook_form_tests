import React from "react";
import { useForm } from "react-hook-form";

export default function HFSample() {
  const { register, handleSubmit, errors } = useForm();

  const onFormSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="FullName"
          name="fullname"
          ref={register({required:true, minLength:3})}
        />
        {errors.fullname && <div>Full Name Invalid</div>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: "Password Required", minLength: {value:8, message:"Enter at least 8 chars"} })}
        />
        {errors.password && <div>{errors.password.message}</div> }
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}
