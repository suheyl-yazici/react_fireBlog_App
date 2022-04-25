// import firebase from "./firebase";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useEffect, useState } from "react";


// bilgi ekleme
export const AddBlog = (info) => {
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

export const useFetch = () => {
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

export const DeleteBlog = (id) => {
    const db = getDatabase();
    // const userRef = ref(db,"baglantı");

    remove(ref(db,"baglantı/" + id));
}
