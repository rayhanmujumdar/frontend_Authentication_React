import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ password, email }) => {
    const userAuth = {
      email,
      password,
    };
    console.log(userAuth);
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/auth/signIn",
        {
          params: userAuth,
        }
      );
      console.log(data);
      if (data.success) {
        reset();
        toast.success("SuccessFully signIn", { id: "success" });
        navigate("/about");
      } else {
        toast.error(data.message, { id: "success" });
      }
    } catch (err) {
      const { email, age, married } = err.response.data.errors;
      toast.error(email.message || age.message || married.message, {
        id: "errors",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            {...register("email", {
                              required: {
                                value: true,
                                message: "email must be required",
                              },
                              pattern: {
                                value:
                                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/,
                                message: "Please provide a valid email",
                              },
                            })}
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="email"
                          />
                          {errors.email && (
                            <p className="text-start text-red-500 mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-4">
                          <input
                            {...register("password", {
                              required: {
                                value: true,
                                message: "password must be required",
                              },
                            })}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                          {errors.password && (
                            <p className="text-start text-red-500 mt-1">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)",
                            }}
                          >
                            Log in
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Danger
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
