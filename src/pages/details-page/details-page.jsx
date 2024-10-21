import styles from './details-page.module.css'
import MenuCard from '@/components/menu-card/menu-card.jsx'
import InfoTable from '@/components/info-table/info-table.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function DetailPage() {
    //     const exampleObj2 = {
    //         "category": {
    //             "category_name": "DER",
    //             "category_description": "분산 에너지 자원에 대한 설명..."
    //         },
    //         "list1": [
    //             "list_name": "Solar",
    //             "id" : 1,
    //             "list_description": "태양광 발전 시스템 설명...",
    //             "column": [
    //                 {
    //                     "id": 1,
    //                     "column_name": "generation_capacity",
    //                     "column_description": "발전 용량 정보",
    //                     "column_value": 10,
    //                 },
    //                 {
    //                     "id": 2,
    //                     "column_name": "generation_capacity",
    //                     "column_description": "발전  효율",
    //                     "column_value": 10,
    //                 },
    //             ],
    //         ],
    //         "list2": [
    //             "list_name": "Wind",
    //             "id": 2
    //             "list_description": "태양광 발전 시스템 설명...",
    //             "column": [
    //                 {
    //                     "id": 1,
    //                     "column_name": "generation_capacity",
    //                     "column_description": "발전 용량 정보",
    //                     "column_value": 10,
    //                 },
    //                 {
    //                     "id": 2,
    //                     "column_name": "generation_capacity",
    //                     "column_description": "발전 용량 정보",
    //                     "column_value": 10,
    //                 },
    //         ]
    // ]
    //
    // }

    const exampleObj = {
        category: {
            category_name: 'DER',
            category_description: '분산 에너지 자원에 대한 설명...',
        },
        menu: [
            {
                id: 1,
                list_name: 'Solar',
                list_description: '태양광 발전 시스템 설명...',
                list: [
                    {
                        id: 1,
                        column_name: 'generation_capacity',
                        column_description: '발전 용량 정보',
                        column_value: 10,
                    },
                    {
                        id: 2,
                        column_name: 'generation_capacity',
                        column_description: '발전  효율',
                        column_value: 10,
                    },
                    {
                        id: 3,
                        column_name: 'generation_capacity',
                        column_description: '발전  효율',
                        column_value: 10,
                    },
                    {
                        id: 4,
                        column_name: 'generation_capacity',
                        column_description: '발전  효율',
                        column_value: 10,
                    },
                ],
            },
            {
                id: 2,
                list_name: 'Wind',
                list_description: '풍력 발전 시스템 설명...',
                list: [
                    {
                        id: 1,
                        column_name: 'generation_capacity',
                        column_description: '발전 용량 정보',
                        column_value: 10,
                    },
                    {
                        id: 2,
                        column_name: 'generation_capacity',
                        column_description: '발전  효율',
                        column_value: 10,
                    },
                ],
            },
            {
                id: 3,
                list_name: 'EV battery',
                list_description: 'EV 배터리 시스템 설명...',
                list: [
                    {
                        id: 1,
                        column_name: 'generation_capacity',
                        column_description: '발전 용량 정보',
                        column_value: 10,
                    },
                    {
                        id: 2,
                        column_name: 'generation_capacity',
                        column_description: '발전  효율',
                        column_value: 10,
                    },
                    {
                        id: 3,
                        column_name: 'soc',
                        column_description: '배터리의 상태(%)',
                        column_value: 1000,
                    },
                    {
                        id: 4,
                        column_name: 'installation_date',
                        column_description: 'DER이 설치된 날짜',
                        column_value: 50,
                    },
                    {
                        id: 5,
                        column_name: 'grid_connection',
                        column_description: 'DER의 그리드 연결 상태',
                        column_value: 1000,
                    },
                    {
                        id: 6,
                        column_name: 'der_type',
                        column_description: 'DER의 유형',
                        column_value: 50,
                    },
                ],
            },
        ],
    }

    const [list, setList] = useState(exampleObj.menu[0].list)

    return (
        <main className={styles['details-page']}>
            <div className={styles['menu-container']}>
                <div className={styles['menu-header']}>
                    <p className={styles['menu-title']}>
                        {exampleObj.category.category_name} 목록
                    </p>
                </div>
                <div className={styles['menu-content']}>
                    {exampleObj.menu.map((item, index) => (
                        <MenuCard
                            key={index}
                            menu={item.list_name}
                            list={item.list}
                            setList={setList}
                        />
                    ))}
                </div>
            </div>
            <div className={styles['details-container']}>
                <div className={styles['details-header']}>
                    <div className={styles['details-title']}>
                        <FontAwesomeIcon
                            icon={faClock}
                            style={{ marginRight: '5px' }}
                        />
                        {exampleObj.menu[0].list_name}
                    </div>
                    <p className={styles['details-description']}>
                        {exampleObj.menu[0].list_description}
                    </p>
                </div>
                <div className={styles['menu-card-container']}>
                    {list.map((item, index) => (
                        <InfoTable
                            key={index}
                            name={item.column_name}
                            description={item.column_description}
                            value={item.column_value}
                        />
                    ))}
                    {/*{exampleObj.menu[0].list.map((item, index) => (*/}
                    {/*    <InfoTable*/}
                    {/*        key={index}*/}
                    {/*        name={item.column_name}*/}
                    {/*        description={item.column_description}*/}
                    {/*        value={item.column_value}*/}
                    {/*    />*/}
                    {/*))}*/}
                </div>
            </div>
        </main>
    )
}
