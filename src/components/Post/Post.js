import React, { useState, useEffect } from 'react';
import ShowPost from '../ShowPost/ShowPost';

const Post = () => {
    const [post , setPost] = useState([]);
    useEffect(()=>{
        const api = ('https://jsonplaceholder.typicode.com/posts');
        fetch(api)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])


    return (
        <div>
            {
                post.map(post => <ShowPost key={post.id} post={post}></ShowPost>)
            }
        </div>
    );
};

export default Post;