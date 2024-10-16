import styles from './details-page.module.css'
import MenuCard from '@/components/menu-card/menu-card.jsx'

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
        ],
    }

    let choice = 'Solar'

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
                        <MenuCard key={index} menu={item.list_name} />
                    ))}
                </div>
            </div>
            <div className={styles['details-container']}>
                <div className={styles['details-header']}>
                    <div className={styles['details-title']}></div>
                    <p>{}</p>
                </div>
                <div className={styles['menu-card-container']}>{}</div>
            </div>
        </main>
    )
}
