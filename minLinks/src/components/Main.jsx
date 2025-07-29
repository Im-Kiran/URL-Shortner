import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { saveLink } from '../Backend/service'
const Main = () => {
    const [link, setlink] = useState({
        longUrl: "",
        shortUrl: ""
    })
    const [short, setshort] = useState("")
    const handleChange = (e) => {
        setlink({ ...link, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(link)
        saveLink(link).then((res) => {
            setshort(link.shortUrl)
            console.log(short)
            setlink({
                longUrl: "",
                shortUrl: ""
            });

        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <Navbar />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='my-7 p-3 border-2 border-b-black m-auto w-2xl flex flex-col gap-2'>

                    <div>Enter LongUrl</div>
                    <div>
                        <input className='p-0.5 border border-b-black w-full' type="text" name="longUrl" onChange={(e) => handleChange(e)} value={link.longUrl} required />
                    </div>
                    <div>Enter ShortUrl</div>
                    <div>
                        <input className='p-0.5 border border-b-black w-full' type="text" name="shortUrl" onChange={(e) => handleChange(e)} value={link.shortUrl} required />
                    </div>
                    <button type='submit' className='p-0.5 text-white rounded-4xl bg-blue-600 border border-b-black'>Generate</button>
                </div>
            </form>



            {short && (

                <div className='my-7 p-3 border-2 border-b-black m-auto w-2xl flex flex-col gap-2'>

                    <div className="mt-4">
                        <p className="mb-2">Shortened URL:</p>
                        <div className="flex items-center gap-2">
                            <a
                                href={`http://localhost:5173/${short}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                http://localhost:5173/{short}
                            </a>
                            <button
                                onClick={() =>
                                    navigator.clipboard.writeText(`http://localhost:5173/${short}`)
                                }
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}

export default Main