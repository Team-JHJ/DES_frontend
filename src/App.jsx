import './App.css'
import BasePage from '@/pages/Base-page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '@/pages/Main-page.jsx'
import VppPage from '@/pages/Vpp-page.jsx'
import CategoryDetailPage from '@/pages/Category-detail-page.jsx'
import ListEditPage from '@/pages/List-edit-page.jsx'

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
                path: '/vpp',
                element: <VppPage />,
            },
            {
                path: 'house/:houseId/:category',
                element: <CategoryDetailPage />,
            },
            {
                path: 'house/:houseId/:category/edit',
                element: <ListEditPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
