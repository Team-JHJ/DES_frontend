import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasePage from './pages/base-page/base-page.jsx'
import MainPage from './pages/main-page/main-page.jsx'
import ListSelectPage from './pages/list-select-page/list-select-page.jsx'
import VppInfoPage from './pages/vpp-info-page/vpp-info-page.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasePage />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/home1',
                element: <ListSelectPage />,
            },
            {
                path: '/vpp',
                element: <VppInfoPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
