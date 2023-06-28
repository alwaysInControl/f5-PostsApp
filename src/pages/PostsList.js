import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostsList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
    })

    return (
        <div>
            Posts list:
            <ol className='posts-list'>
                {posts && posts.map(post => <li key={post.id}>
                    {post.title}
                </li>)}
            </ol>
        </div>
    );
};

export default PostsList;