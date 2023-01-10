import React, { useState } from 'react';
import {Container, Row,  Col, Form, FormGroup } from 'reactstrap'
import '../style/add-products.css';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config';
import { ref } from '@firebase/storage';
import { uploadBytesResumable} from '@firebase/storage';
import { getDownloadURL } from '@firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';


function AddProducts() {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterShortDesc, setEnterShortDesc] = useState('');
    const [enterDescription, setEnterDescription] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterCategory, setEnterCategory] = useState('');
    const [enterProductImg, setEnterProductImg] = useState(null)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const addProduct = async(e)=>{
        e.preventDefault()
        setLoading(true)


        try {
            const docRef= await collection(db, 'products')
            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

            uploadTask.on(()=>{
                toast.error("images not uploaded")
            }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                    await addDoc(docRef, {      
                                productName:enterTitle,
                                shortDesc:enterShortDesc,
                                description:enterDescription,
                                price:enterPrice,
                                category:enterCategory,
                                imgUrl:downloadURL

                    });
                });
                
            }
            )
            setLoading(false)
            toast.success("product successfully added");
            navigate('/dashboard/all-products'); 
        } catch (err) {
            setLoading(false)
            toast.error('product not added ')
            
        }

        // const product = {
        //     title:enterTitle,
        //     shortDesc:enterShortDesc,
        //     description:enterDescription,
        //     price:enterPrice,
        //     category:enterCategory,
        //     productImage:enterProductImg


        // }

        // // add item to firabse
        // toast.success("product is being added")
        // console.log(product)


    }
  return <section>
    <Container>
        <Row>
            <Col lg='12'>
                {
                    loading ? <Col lg="12" className='text-center'> <h4 className='text-center'>Loading...</h4> </Col>:( <>
                    <h4>Add Products</h4>
                <Form onSubmit={addProduct}>
                    <FormGroup className='form__group'>
                        <span>Product title</span>
                        <input type="text" placeholder="Double sofa" value={enterTitle} onChange={e=>setEnterTitle(e.target.value)} required/>
                    </FormGroup>
                    <FormGroup className='form__group'>
                        <span>Short Description </span>
                        <input type="text" placeholder="lorem...." value={enterShortDesc} onChange={e=>setEnterShortDesc(e.target.value)} required/>

                    </FormGroup>

                    <FormGroup className='form__group'>
                        <span>Description </span>
                        <input type="text" placeholder="Description" value={enterDescription} onChange={e=>setEnterDescription(e.target.value)} required/>

                    </FormGroup>
                    <div className='d-flex align-items-center justify-content-between gap-5'>
                    <FormGroup className='form__group w-50 '>
                        <span>Price</span>
                        <input type="number" placeholder="$100" value={enterPrice} onChange={e=>setEnterPrice(e.target.value)} required/>
                    </FormGroup>
                 
                    <FormGroup className='form__group w-50'>
                        <span>Category</span>
                        <select className='w-100 p-2' value={enterCategory} onChange={e=>setEnterCategory(e.target.value)}>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                        </select>
                    </FormGroup>
                    

                    </div>
                    <div>
                        <FormGroup className='form__group'>
                            <span>Product Image</span>
                            <input type="file" placeholder='$100' onChange={e=>setEnterProductImg(e.target.files[0])}  required/>
                        </FormGroup>

                    </div>
                    <motion.button whileTap={{scale:1.2}} className='buy__btn  btn p-2' type='submit'>Add Products</motion.button>
                   
                </Form>


                    </>)
                }
                

            </Col>

        </Row>
    </Container>
  </section>
}

export default AddProducts