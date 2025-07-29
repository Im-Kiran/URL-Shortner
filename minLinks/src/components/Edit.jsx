import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { editLink, getLinkById} from '../Backend/service'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Edit = () => {
    const [link, setLink] = useState({
        // id: "",
        longUrl: "",
        shortUrl: ""
    })
    
    const {id}=useParams();

    const navigate=useNavigate();

    useEffect(() => {
        getLinkById(id).then((res)=>{
            setLink(res.data)
        })
    }, [])
    const handleChange=(e)=>{
        setLink({...link,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(link)
            editLink(link,id).then((res) => {
                setLink({
                    
                     longUrl: "",
                        shortUrl: ""
                });
                navigate("/viewLinks")
                
            }).catch((err) => {
                console.log(err);
            })
        }
    return (
        <>
            <Navbar />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='my-7 p-3 border-2 border-b-black m-auto w-2xl flex flex-col gap-2'>
                    {/* <div>Enter ID</div>
                    <div>
                        <input className='p-0.5 border border-b-black w-full' type="number" name="id" onChange={(e) => handleChange(e)} value={product.id} />
                    </div> */}
                    <div>Enter longUrl</div>
                    <div>
                        <input className='p-0.5 border border-b-black w-full' type="text" name="longUrl" onChange={(e) => handleChange(e)} value={link.longUrl} />
                    </div>
                    <div>Enter ShortUrl</div>
                    <div>
                        <input className='p-0.5 border border-b-black w-full' type="text" name="shortUrl" onChange={(e) => handleChange(e)} value={link.shortUrl} />
                    </div>
                    <button type='submit' className='p-0.5 text-white rounded-4xl bg-blue-600 border border-b-black'>Update</button>
                </div>
            </form>
        </>

    )
}

export default Edit