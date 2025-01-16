import React from "react";
import { useForm } from "react-hook-form";
import "./SignUpForm.css";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const password = watch("password");

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
