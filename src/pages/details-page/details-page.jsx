import styles from './details-page.module.css'
import MenuCard from '@/components/menu-card/menu-card.jsx'
import InfoTable from '@/components/info-table/info-table.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import info from '@/api/info.js'
import Loading from '@/components/loading/loading.jsx'

export default function DetailPage() {
    const param = useParams()
    const value = useLocation().state
    const [dataList, setDataList] = useState({})
    const [menu, setMenu] = useState([])

    // 엔드포인트 이름 변경
    const categoryName = {
        der: 'der',
        'home-loads': 'homeload',
        emd: 'emd',
        'sust-metrics': 'metrics',
    }

    const exampleObj = {
        category: {
            categoryName: 'DER',
            categoryDescription:
                '분산형 에너지 자원(DER, Distributed Energy Resources)은 전력망에 직접 연결되거나 근접하여 운영되는 소규모 전력 생성, 저장, 소비 장치를 말한다. DER에는 태양광 패널, 풍력 터빈, 에너지 저장 시스템(ESS) 등이 포함되며, 이러한 자원은 전력을 생성하고 소비하는 위치에서 효율적으로 에너지를 활용하도록 설계되었다. DER는 전력망의 탄력성을 강화하고, 에너지 비용 절감, 탄소 배출 감소, 에너지 자립도를 높이는 데 기여한다. 이러한 시스템은 중앙집중형 발전소와는 달리, 분산형으로 운영되며, 지역 커뮤니티의 에너지 요구에 맞춰 최적화될 수 있다.',
        },
        menu: [
            {
                id: 1,
                menuName: 'Solar',
                menuDescription:
                    '태양광 발전 시스템은 태양의 에너지를 전기로 변환하는 기술을 사용한다. 태양광 패널은 햇빛을 흡수하여 전자를 발생시키고, 이로 인해 전기가 생성된다. 이 시스템은 환경 친화적이며, 발전량은 햇빛의 양에 따라 달라진다.',
                list: [
                    {
                        id: 1,
                        listName: 'generation_capacity',
                        listDescription: 'DER의 발전 용량 (kW)',
                        listValue: 10,
                    },
                    {
                        id: 2,
                        listName: 'installation_date',
                        listDescription: 'DER이 설치된 날짜',
                        listValue: '2022-01-01',
                    },
                    {
                        id: 3,
                        listName: 'location',
                        listDescription: 'DER의 설치 위치 (위도 및 경도)',
                        listValue: '51.509865, -0.118092',
                    },
                    {
                        id: 4,
                        listName: 'storage_capacity',
                        listDescription: '배터리의 저장 용량 (kWh)',
                        listValue: 5,
                    },
                    {
                        id: 5,
                        listName: 'der_efficiency',
                        listDescription: 'DER의 효율성 (%)',
                        listValue: 18,
                    },
                    {
                        id: 6,
                        listName: 'soc',
                        listDescription: '배터리의 상태 (%)',
                        listValue: 7.0,
                    },
                    {
                        id: 7,
                        listName: 'energy_generation',
                        listDescription: 'DER에서 생성된 에너지량 (kWh)',
                        listValue: 8.0,
                    },
                    {
                        id: 8,
                        listName: 'grid_connection',
                        listDescription: 'DER의 그리드 연결 상태',
                        listValue: 'Connected',
                    },
                ],
            },
            {
                id: 2,
                menuName: 'Wind',
                menuDescription:
                    '풍력 발전 시스템은 바람의 운동 에너지를 전기로 변환하는 방식이다. 풍력 터빈이 바람에 의해 회전하면서 발전기가 전기를 생산한다. 이 시스템은 바람이 많이 부는 지역에서 효율적이며, 탄소 배출을 줄이는 데 기여한다.',
                list: [
                    {
                        id: 1,
                        listName: 'generation_capacity',
                        listDescription: 'DER의 발전 용량 (kW)',
                        listValue: 50,
                    },
                    {
                        id: 2,
                        listName: 'installation_date',
                        listDescription: 'DER이 설치된 날짜',
                        listValue: '2021-05-15',
                    },
                    {
                        id: 3,
                        listName: 'location',
                        listDescription: 'DER의 설치 위치 (위도 및 경도)',
                        listValue: '40.712776, -74.005974',
                    },
                    {
                        id: 4,
                        listName: 'storage_capacity',
                        listDescription: '배터리의 저장 용량 (kWh)',
                        listValue: 15,
                    },
                    {
                        id: 5,
                        listName: 'der_efficiency',
                        listDescription: 'DER의 효율성 (%)',
                        listValue: 35,
                    },
                    {
                        id: 6,
                        listName: 'soc',
                        listDescription: '배터리의 상태 (%)',
                        listValue: 35.0,
                    },
                    {
                        id: 7,
                        listName: 'energy_generation',
                        listDescription: 'DER에서 생성된 에너지량 (kWh)',
                        listValue: 40.0,
                    },
                    {
                        id: 8,
                        listName: 'grid_connection',
                        listDescription: 'DER의 그리드 연결 상태',
                        listValue: 'Off-grid',
                    },
                ],
            },
            {
                id: 3,
                menuName: 'EV Battery',
                menuDescription:
                    '전기차 배터리는 전기차에 사용되는 에너지 저장 장치로, 주행 중 전기를 저장하고 사용할 수 있다. 이 배터리는 고속 충전이 가능하고, 다양한 크기와 용량으로 제공되어 전기차의 주행 거리와 성능을 향상시킨다.',
                list: [
                    {
                        id: 1,
                        listName: 'generation_capacity',
                        listDescription: 'DER의 발전 용량 (kW)',
                        listValue: 75,
                    },
                    {
                        id: 2,
                        listName: 'installation_date',
                        listDescription: 'DER이 설치된 날짜',
                        listValue: '2023-05-22',
                    },
                    {
                        id: 3,
                        listName: 'location',
                        listDescription: 'DER의 설치 위치 (위도 및 경도)',
                        listValue: '41.8781, -87.6298',
                    },
                    {
                        id: 4,
                        listName: 'storage_capacity',
                        listDescription: '배터리의 저장 용량 (kWh)',
                        listValue: 75,
                    },
                    {
                        id: 5,
                        listName: 'der_efficiency',
                        listDescription: 'DER의 효율성 (%)',
                        listValue: 90,
                    },
                    {
                        id: 6,
                        listName: 'soc',
                        listDescription: '배터리의 상태 (%)',
                        listValue: 52.5,
                    },
                    {
                        id: 7,
                        listName: 'energy_generation',
                        listDescription: 'DER에서 생성된 에너지량 (kWh)',
                        listValue: 60.0,
                    },
                    {
                        id: 8,
                        listName: 'grid_connection',
                        listDescription: 'DER의 그리드 연결 상태',
                        listValue: 'Connected',
                    },
                ],
            },
            {
                id: 4,
                menuName: 'ESS',
                menuDescription:
                    '에너지 저장 시스템(ESS)은 전력을 저장하고 필요할 때 사용할 수 있도록 설계된 장치로, 일반적으로 대규모 발전소나 분산형 에너지 시스템에 사용된다. ESS는 재생 에너지를 저장하여 필요할 때 전력을 공급하고, 전력망의 안정성을 높이는 데 기여한다. 이 시스템은 전력 수요와 공급의 차이를 조절하는 역할도 수행한다.',
                list: [
                    {
                        id: 1,
                        listName: 'generation_capacity',
                        listDescription: 'DER의 발전 용량 (kW)',
                        listValue: 30,
                    },
                    {
                        id: 2,
                        listName: 'installation_date',
                        listDescription: 'DER이 설치된 날짜',
                        listValue: '2021-07-05',
                    },
                    {
                        id: 3,
                        listName: 'location',
                        listDescription: 'DER의 설치 위치 (위도 및 경도)',
                        listValue: '43.0522, -88.3156',
                    },
                    {
                        id: 4,
                        listName: 'storage_capacity',
                        listDescription: '배터리의 저장 용량 (kWh)',
                        listValue: 30,
                    },
                    {
                        id: 5,
                        listName: 'der_efficiency',
                        listDescription: 'DER의 효율성 (%)',
                        listValue: 85,
                    },
                    {
                        id: 6,
                        listName: 'soc',
                        listDescription: '배터리의 상태 (%)',
                        listValue: 21.0,
                    },
                    {
                        id: 7,
                        listName: 'energy_generation',
                        listDescription: 'DER에서 생성된 에너지량 (kWh)',
                        listValue: 24.0,
                    },
                    {
                        id: 8,
                        listName: 'grid_connection',
                        listDescription: 'DER의 그리드 연결 상태',
                        listValue: 'Connected',
                    },
                ],
            },
        ],
    }

    const getData = async () => {
        try {
            const response = await info.getDetails(
                param.houseId,
                categoryName[param.category],
            )
            setDataList(response.data)
            const menu = response.data.menu.filter(
                (menu) => menu.menuName === value,
            )
            setMenu(menu[0])
        } catch (error) {
            console.error('Request Error:', error.message)
            alert(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className={styles['details-page']}>
            {Object.keys(dataList).length > 0 ? (
                <>
                    <div className={styles['menu-container']}>
                        <div className={styles['menu-header']}>
                            <p className={styles['menu-title']}>
                                {dataList.category.categoryName} 목록
                            </p>
                        </div>
                        <div className={styles['menu-content']}>
                            {dataList.menu.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    menu={item.menuName}
                                    list={item}
                                    setMenu={setMenu}
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
                                {menu.menuName}
                            </div>
                            <p className={styles['details-description']}>
                                {menu.menuDescription}
                            </p>
                        </div>
                        <div className={styles['menu-card-container']}>
                            {menu.list.map((item, index) => (
                                <InfoTable
                                    key={index}
                                    name={item.listName}
                                    description={item.listDescription}
                                    value={item.listValue}
                                />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </main>
    )
}
