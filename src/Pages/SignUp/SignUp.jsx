import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Components/provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
          .then(result =>{
            const user = result.user;
            console.log(user)
            })
          .catch(error =>{
            console.log(error)
            })

        
    }

    return (
        <div>
         <div className="hero min-h-screen bg-base-200 my-14">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div >
                        <img src={img} alt="" />
                    
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        </div>

                        <p>Already have an account? Please <Link to="/login" className="text-orange-600">Login</Link></p>
                    </form>
                    </div>
                </div>
          </div>
            
        </div>
    );
};

export default SignUp;