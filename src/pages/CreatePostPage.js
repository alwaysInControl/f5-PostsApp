import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreatePostPage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://dummyjson.com/posts/add', {
            title: title,
            body: content,
            userId: 1
        }).then(response => {
            alert(`Post added successfully!\nTitle: ${title}\nContent: ${content}`)
            navigate('/posts')
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create Post</h2>
                <label>Title:</label>
                <input type="text" onChange={event => setTitle(event.target.value)}/><br/>
                <label>Content:</label>
                <textarea rows='5' onChange={event => setContent(event.target.value)}></textarea><br/>
                <input type="submit" value='Add post' className='submitButton'/>
            </form>
        </div>
    );
};

export default CreatePostPage;