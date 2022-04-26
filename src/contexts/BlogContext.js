import app from "../helpers/firebase";
import { createContext,useState,useEffect } from "react";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {

// bilgi ekleme
 const AddBlog = (info) => {
    const db = getDatabase();
    const userRef = ref(db,"baglantı");
    const newUserRef = push(userRef)
    set((newUserRef),{
        title:info.title,
        image:info.image,
        content:info.content
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
    // const userRef = ref(db,"baglantı");

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