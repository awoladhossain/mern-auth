import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  singInStart,
  singInFailure,
  singInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SingIn = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  console.log(loading, error);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(singInStart());

      const res = await fetch("/api/auth/singin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      // setLoading(false);
      if (data.success == false) {
        // setError(true);
        dispatch(singInFailure(data));
        return;
      }
      dispatch(singInSuccess(data));
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(true);
      dispatch(singInFailure(error));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sing In </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 rounded-md text-white p-3 uppercase hover:opacity-90 disabled:opacity-80"
          type="submit"
        >
          {loading ? "loading" : "Sing In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an Account?</p>
        <Link to="/sing-up">
          <span className="text-blue-500 font-semibold">Sing up</span>
        </Link>
      </div>
      <p className="text-red-600 mt-5 font-semibold">
        {error ? error.message || "something went wrong" : ""}
      </p>
    </div>
  );
};
export default SingIn;
