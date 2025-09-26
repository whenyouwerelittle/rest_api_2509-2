import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">홈</Link>&nbsp;&nbsp;<a href="/">Home</a>
            </li>
            <li>
                <Link to="/auth/login">로그인</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/auth/login">로그인</a>
            </li>
            <li>
                <Link to="/article/list">게시글 목록</Link>
            </li>
        </ul>
    )
}

export default Nav
