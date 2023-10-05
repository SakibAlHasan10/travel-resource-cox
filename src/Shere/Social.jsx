import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useApi from "../ContextApi/useApi";
const Social = () => {
    const {signUpWithGoogle} = useApi()
    const handleSignUpWithSocial=()=>{
        signUpWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>console.error(error))
    }
  return (
    <div className="  pt-4 max-w-sm mx-auto ">
      <div className=" flex items-center gap-2 px-6 max-w-sm mx-auto ">
        <p className="border-b-slate-950 border w-full "></p>
        <span className="text-base font-medium">Or</span>
        <p className="border border-b-slate-950 w-full"></p>
      </div>

      <Link>
        <span className="flex items-center rounded-3xl gap-20 border-2 p-2 mt-2 text-base font-medium ">
          <FaFacebook className="text-3xl text-blue-700"></FaFacebook>
          <span>Continue with Facebook</span>
        </span>
      </Link>
      <Link>
        <span onClick={handleSignUpWithSocial} className="flex items-center rounded-3xl gap-20 border-2 p-2 mt-2 text-base font-medium ">
          <FaGoogle className="text-3xl text-orange-500"></FaGoogle>
          <span className="ml-2">Continue with Google</span>
        </span>
      </Link>
    </div>
  );
};

export default Social;
