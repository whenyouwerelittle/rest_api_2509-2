import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import ArticleList from './pages/ArticleList'
import Nav from './components/Nav'

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Main />}></Route>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/article/list" element={<ArticleList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
