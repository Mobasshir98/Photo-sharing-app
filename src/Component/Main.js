import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Header,Postview} from "../PostView/postview"

export default function Main() {
    const [users, setdata] = useState([])
    useEffect(() => {
        axios.get("https://insta-server-10.herokuapp.com/posts")
            .then(res => {
                setdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [users])
    return (
        <>
            <Header />
            {users.map((user) => {
                return (
                    <Postview key={user._id} name={user.author} location={user.location} image={user.image} date={user.Date} likes={user.likes} description={user.description} />
                )
            }
            )}
        </>
    );
}
