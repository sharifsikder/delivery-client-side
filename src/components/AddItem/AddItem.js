import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {

    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://guarded-ridge-80572.herokuapp.com/items', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added sucessfully')
                reset();
            }
        })
    }
    return (
        <div className="add-item">
            <h2 className="text-center text-white pt-5 mb-4">Please add a Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
            <textarea {...register("discreption")} placeholder="Descreption" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("img")} placeholder="img-url" />

           <input type="submit" />
    </form>
        </div>
    );
};

export default AddItem;