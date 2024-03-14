import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tks-bistro-boss.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;