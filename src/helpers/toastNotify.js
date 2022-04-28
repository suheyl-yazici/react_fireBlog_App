import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const toastify =(message) => {
    toast(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
} 

export default toastify;



