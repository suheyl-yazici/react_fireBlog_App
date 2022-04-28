import { createContext,useState,useEffect, useContext } from "react";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { AuthContext } from "./AuthContext";


export const BlogContext = createContext();

const d = new Date();
const time = d.toLocaleDateString();


const BlogContextProvider = (props) => {

    const { currentUser } = useContext(AuthContext);

// bilgi ekleme
 const AddBlog = (info) => {
    const db = getDatabase();
    const userRef = ref(db,"baglantı");
    const newUserRef = push(userRef)
    set((newUserRef),{
        title:info.title,
        image:info.image,
        content:info.content,
        author: currentUser.email,
        date: time
    })
}

// bilgi çağırma

 const useFetch = () => {
    const [isloading, setIsloading] = useState();
    const [contactBlog, setContactBlog] = useState()
    

    useEffect(() => {
        setIsloading(true);

        const db = getDatabase();
        const userRef = ref(db,"baglantı");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id, ...data[id]})
            }
            setContactBlog(baglantiArray);
            setIsloading(false);
    });
    
},[])
return {isloading,contactBlog}
}

 const DeleteBlog = (id) => {
    const db = getDatabase();

    remove(ref(db,"baglantı/" + id));
}


// bilgi değiştirme
 const EditBlog=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["baglantı/"+info.id]=info;
    return update(ref(db),updates)
}

return(
    <BlogContext.Provider value={{ AddBlog,useFetch,DeleteBlog,EditBlog }}>
        {props.children}
    </BlogContext.Provider>
)
}

export default BlogContextProvider;