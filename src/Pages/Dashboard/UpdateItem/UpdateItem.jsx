
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {


    const { _id, name, category, recipe, price } = useLoaderData();
    //console.log(item);

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        //console.log(data);
        // image upload to imgbb and will get a url form there
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        //console.log(res.data);
        if (res.data.success) {
            // todo: model still not working
            // sending data to the server with hosted image link
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            // 
            const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem).then((resp) => resp.data)
            //console.log(menuResponse.data);
            if (menuResponse.data.modifiedCount > 0) {
                // show successful toast
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${menuItem.name} has been updated`,
                    showConfirmButton: false,
                    timer: 1200
                });

            }
        }
        //console.log('image url', res.data);
    };

    return (
        <div>
            <div>
                <h3 className="text-lg font-heading font-semibold text-slate-500 text-center mt-5
                ">Whats new?</h3>

                <h3 className="text-3xl font-bold font-paragraph  my-7 text-center text-">UPDATE AN ITEM : <span className="font-paragraph text-slate-600">{name}</span></h3>
            </div>

            {/* using react hook form */}

            <div className=" mx-10 xl:mx-52">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">

                        <label className="label">
                            <span className="label-text text-xl font-heading font-bold">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder={name}
                            {...register('name', { required: true })}

                            className="input input-bordered w-full" />

                    </div>

                    <div className="flex gap-8">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-heading font-bold">Category*</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register("category")}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-heading font-bold">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder={price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* recipe details */}
                    <div className="form-control w-full my-6">

                        <label className="label">
                            <span className="label-text text-xl font-heading font-bold">Recipe Details*</span>
                        </label>
                        {/* lg */}
                        <textarea
                            defaultValue={recipe}
                            placeholder={recipe}
                            className="textarea textarea-bordered w-full"
                            {...register('recipe', { required: true })}
                        ></textarea>
                    </div>


                    {/* file input */}
                    <div className=" form-control my-6">

                        <input
                            {...register("image")}
                            type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    {/* submit button */}
                    <div className="flex justify-center">
                        <button
                            className="btn btn-outline btn-[#F4D699] hover:bg-[#F4D699]  rounded-full px-20 text-center text-base lg:text-lg font-semibold font-body text-black hover:text-black my-5 lg:my-7">
                            Update Menu Item
                        </button>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default UpdateItem;