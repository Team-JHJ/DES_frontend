import styles from './vpp-info-page.module.css'
import InfoTable from '@/components/info-table/info-table.jsx'

export default function VppInfoPage() {
    // const exampleObj2 = {
    //     list: [
    //         {
    //             list_name: 'vpp',
    //             list_description: 'vpp에 대한 설명',
    //             resource: [
    //                 {
    //                     resource_name: 'aggregated_capacity',
    //                     resource_description: '관련설명~~~~~~',
    //
    //                     resource_value: '어쩌구',
    //                 },
    //                 {
    //                     resource_name: 'transmission_frequency',
    //                     resource_description:
    //                         '전체 에너지에서 재생 가능 에너지의 비율 (%)',
    //
    //                     resource_value: '51.509865, -0.118092',
    //                 },
    //                 {
    //                     resource_name: 'aggregated_capacity',
    //                     resource_description: '관련설명~~~~~~',
    //
    //                     resource_value: '어쩌구',
    //                 },
    //                 {
    //                     resource_name: 'transmission_frequency',
    //                     resource_description:
    //                         '전체 에너지에서 재생 가능 에너지의 비율 (%)',
    //
    //                     resource_value: '51.509865, -0.118092',
    //                 },
    //                 {
    //                     resource_name: 'aggregated_capacity',
    //                     resource_description: '관련설명~~~~~~',
    //
    //                     resource_value: '어쩌구',
    //                 },
    //                 {
    //                     resource_name: 'transmission_frequency',
    //                     resource_description:
    //                         '전체 에너지에서 재생 가능 에너지의 비율 (%)',
    //
    //                     resource_value: '51.509865, -0.118092',
    //                 },
    //             ],
    //         },
    //     ],
    // }
    // console.log(exampleObj.list[0].resource)

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
        ],
    }

    return (
        <main className={styles['vpp-info-page']}>
            {exampleObj.list.map((item, index) => (
                <InfoTable
                    key={index}
                    name={item.list_name}
                    description={item.list_description}
                    value={item.list_value}
                />
            ))}
        </main>
    )
}
