import React from 'react';

const CreatePostPage = () => {
    return (
        <div>
            <form>
                <h2>Create Post</h2>
                <label>Title:</label>
                <input type="text"/><br/>
                <label>Content:</label>
                <textarea rows='5'></textarea><br/>
                <input type="submit" value='Add post' className='submitButton'/>
            </form>
        </div>
    );
};

export default CreatePostPage;