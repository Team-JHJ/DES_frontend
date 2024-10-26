import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasePage from '@/pages/base-page/base-page.jsx'
import MainPage from '@/pages/main-page/main-page.jsx'
import ListSelectPage from '@/pages/list-select-page/list-select-page.jsx'
import VppInfoPage from '@/pages/vpp-info-page/vpp-info-page.jsx'
import DerListPage from '@/pages/der-list-page/der-list-page.jsx'
import EmdListPage from '@/pages/emd-list-page/emd-list-page.jsx'
import HomeLoadsListPage from '@/pages/home-loads-list-page/home-loads-list-page.jsx'
import SustMetricsListPage from '@/pages/sust-metrics-list-page/sust-metrics-list-page.jsx'
import DetailPage from '@/pages/details-page/details-page.jsx'
import IntroductionPage from '@/pages/introduction-page/introduction-page.jsx'

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
                element: <VppInfoPage />,
            },
            {
                path: '/house/:houseId',
                element: <ListSelectPage />,
            },
            {
                path: '/house/:houseId/der',
                element: <DerListPage />,
            },
            {
                path: '/house/:houseId/emd',
                element: <EmdListPage />,
            },
            {
                path: '/house/:houseId/home-loads',
                element: <HomeLoadsListPage />,
            },
            {
                path: '/house/:houseId/sust-metrics',
                element: <SustMetricsListPage />,
            },
            {
                path: '/house/:houseId/der/details',
                element: <DetailPage />,
            },
            {
                path: '/house/:houseId/emd/details',
                element: <DetailPage />,
            },
            {
                path: '/house/:houseId/home-loads/details',
                element: <DetailPage />,
            },
            {
                path: '/house/:houseId/sust-metrics/details',
                element: <DetailPage />,
            },
            {
                path: '/introduction',
                element: <IntroductionPage />,
            },
            {
                path: '*',
                element: <MainPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
