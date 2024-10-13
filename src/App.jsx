import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasePage from './pages/base-page/base-page.jsx'
import MainPage from './pages/main-page/main-page.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasePage />,
        children: [
            {
                path: '/',
                element: <MainPage />, // 메인 페이지를 '/' 경로로 변경
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
