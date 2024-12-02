import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Store/FirebaseContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthMode } from "../../Redux/AuthSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import specific icons 

import { 
  accesible_emails,  
  viewer_emails, 
  editor_emails, 
  owner_emails
 } from "../../utils/HardData"; 


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const state = useSelector((state) => state.auth); 


  useEffect(() => {
    console.log(state.user.email);
    if (state.user.email) { 
      navigate("/");       
    }
  }, []);

  function LoginSubmit() {

    if (accesible_emails.includes(email)) {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("login completed");

          dispatch(
            changeAuthMode({
              email: email, 
              role: viewer_emails.includes(email) ? 'viewer' : (editor_emails.includes(email) ? 'editor' : 'owner')
            })
          );
          navigate("/");
      
          })
          .catch((err) => {
            console.log(err, '-----------')
          });
        } 
             
          else {
            setError("Sorry you don't have access")
          }
    }
    

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Login container positioned inside the 3D background */}
      <div
        className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 zoom-hover 
      p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">LOGIN</h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex items-center">
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              required
            />
            <button
              style={{ backgroundColor: "transparent", marginLeft: "10px" }}
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />{" "}
              {/* Show the appropriate icon */}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <small className="text-red-500 mx-auto my-3 font-medium">
            {error}
          </small>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => LoginSubmit()}
            className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-90 active:opacity-80"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
