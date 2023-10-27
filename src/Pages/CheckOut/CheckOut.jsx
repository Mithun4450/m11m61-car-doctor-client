import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/provider/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const {_id, title, price, img} = service;
    
    const {user} = useContext(AuthContext);
    console.log(user);

    const handleOrderConfirm = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            date,
            email,
            img,
            service_title: title,
            service_id: _id,
            price: price,

        }

        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Order added successfully')
            }
        })

      
       
    }

    return (
        <div className="my-14">

            <h1>Checkout of {title}</h1>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                   
                    <form onSubmit={handleOrderConfirm} >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" name="amount" placeholder="Due Amount" defaultValue={price} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-block bg-[#FF3811] text-white">Order Confirm</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default CheckOut;