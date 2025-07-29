import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { deleteLink, getAllLinks} from '../Backend/service';

import { Link } from 'react-router-dom';
const ViewLinks = () => {
    const [urlLinks, seturlLinks] = useState([]);
    useEffect(() => {

        getAllLinks().then((res) => {
            console.log(res.data);
            seturlLinks(res.data)
            console.log(urlLinks)
        }).catch((err) => {
            console.log(err);
        })
    },[])

    const handleDelete=(id)=>{
        if(window.confirm("Are u sure?")){

            deleteLink(id).then((res)=>{
                console.log(`Delelted successfully ${id}`);
                seturlLinks(urlLinks.filter(p => p.id !== id));
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    
    return (
        <>
            <Navbar />
            <table className="w-1/2 m-auto border-collapse border border-amber-950 ...">
                <thead>
                    <tr>
                        {/* <th className="border border-amber-950 ...px-4 py-2">Id</th> */}
                        <th className="border border-amber-950 ...px-4 py-2">LongUrl</th>
                        <th className="border border-amber-950 ...px-4 py-2">ShortUrl</th>
                        <th className="border border-amber-950 ...px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {urlLinks.map((p) => (
                        <tr key={p.id}>
                            {/* <td className="border border-amber-950 px-4 py-2">{p.id}</td> */}
                            <td className="border border-amber-950 px-4 py-2">{p.longUrl}</td>
                            <td className="border border-amber-950 px-4 py-2">{p.shortUrl}</td>
                            <td className='border border-amber-950 px-4 py-2 flex flex-row gap-0.5 justify-center'>
                                    <Link  to={`Edit/${p.id}`}>
                                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Edit
                                </button>
                                    </Link>
                                <button onClick={()=>handleDelete(p.id)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ViewLinks