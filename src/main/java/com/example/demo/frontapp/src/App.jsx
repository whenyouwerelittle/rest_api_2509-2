import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import ArticleList from './pages/ArticleList'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/article/list" element={<ArticleList></ArticleList>} />
                    {/* <Route index element={<Main></Main>}> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
