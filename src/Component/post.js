import React from 'react'
import { Header } from '../PostView/postview'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FileBase64 from 'react-file-base64';



const Post = () => {
    const [post, setpost] = useState({})
    const formdata = [{
        id: "author", placeholder: "Author", type: "text"
    }, {
        id: "location", placeholder: "Location", type: "text"
    }, {
        id: "description", placeholder: "Description", type: "text"
    }]
    const navigate = useNavigate();
    const handlesubmit = () => {
        console.log(post);
        axios({
            url:"http://localhost:5000/post",
            method:"POST",
            headers:{

            },
            data:post
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
        navigate("../main")

    }
    const handlechange = (e, id) => {
        setpost({ ...post, [id]: e.target.value })

    }
    return (
        <>
            <Header />
            <div className='post-form'>
            <FileBase64
        multiple={ false }
        onDone={ ({base64})=>setpost({...post,image:base64}) } />
                <form>
                    {
                        formdata.map((data) => {
                            return (
 
                                <div id={data.id}>
                                    <div>
                                        <label htmlFor={data.id}></label>
                                    </div>
                                    <div>
                                        <input type={data.type} placeholder={data.placeholder}  onChange={(e) => { handlechange(e, data.id) }} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </form>
                <button type='button' onClick={handlesubmit}>POST</button>
            </div>
        </>
    )
}

export default Post