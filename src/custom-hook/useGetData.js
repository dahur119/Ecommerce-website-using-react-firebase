import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';

function useGetData(collectionName) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const collectionRef = collection(db, collectionName)


    useEffect(()=>{
        const getData = async()=>{

            // firebase firestore  realtime data updated 
            await onSnapshot(collectionRef, (snapShot)=>{
                setData(snapShot.docs.map(doc=>({...doc.data(), id:doc.id})))
                setLoading(false)

            })
           
        };

        getData();
    }, []);


  return {data, loading};
}

export default useGetData