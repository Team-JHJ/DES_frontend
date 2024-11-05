import styles from './vpp-info-page.module.css'
import InfoTable from '@/components/info-table/info-table.jsx'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setHeader } from '@/store/header-slice.js'
import info from '@/api/info.js'

export default function VppInfoPage() {
    const dispatch = useDispatch()
    const [dataList, setDataList] = useState({})

    console.log(import.meta.env.VITE_BACKEND_URL)

    const getDetail = async () => {
        try {
            const response = await info.getVpp()
            setDataList(response.data)
        } catch (error) {
            console.error('Request Error:', error.message)
            alert(error.message)
        }
    }

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        getDetail()
        dispatch(
            setHeader({
                title: 'VPP',
                description:
                    '가상 발전소(VPP)는 분산형 에너지 자원(DER)과 에너지 저장 장치들을 통합하여 원격으로 관리하는 시스템이다. VPP는 여러 개의 소규모 발전소와 에너지원들을 연결하여 하나의 대규모 발전소처럼 운영하며, 전력 시장에서 에너지를 거래하거나 전력망에 전력을 공급하는 역할을 한다. 이를 통해 효율성을 극대화하고, 에너지의 안정성을 높인다.',
            }),
        )
    }, [])

    const exampleObj = {
        category: {
            category_name: 'VPP',
            category_description: 'VPP에 대한 설명...',
        },
        list: [
            {
                id: 1,
                list_name: 'location',
                list_description: '발전 위치',
                list_value: '51.509865, -0.118092',
            },
            {
                id: 2,
                list_name: 'generation_efficiency',
                list_description: '발전 효율',
                list_value: 15.7,
            },
            {
                id: 3,
                list_name: 'generation_efficiency',
                list_description: '발전 효율',
                list_value: 15.7,
            },
            {
                id: 4,
                list_name: 'generation_efficiency',
                list_description: '발전 효율',
                list_value: 15.7,
            },
        ],
    }

    return (
        <main className={styles['vpp-info-page']}>
            {Object.keys(dataList).length > 0 ? (
                <>
                    {dataList.menu[0].list.map((item, index) => (
                        <InfoTable
                            key={index}
                            name={item.listName}
                            description={item.listDescription}
                            value={item.listValue}
                        />
                    ))}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    )
}
