import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import PostsList from "./pages/PostsList";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='posts' element={<PostsList/>}/>
                    <Route path='create-post' element={<CreatePostPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
