import styles from './vpp-info-page.module.css'
import InfoTable from '@/components/info-table/info-table.jsx'

export default function VppInfoPage() {
    const exampleObj = {
        list: [
            {
                list_name: 'vpp',
                list_description: 'vpp에 대한 설명',
                resource: [
                    {
                        resource_name: 'aggregated_capacity',
                        resource_description: '관련설명~~~~~~',

                        resource_value: '어쩌구',
                    },
                    {
                        resource_name: 'transmission_frequency',
                        resource_description:
                            '전체 에너지에서 재생 가능 에너지의 비율 (%)',

                        resource_value: '51.509865, -0.118092',
                    },
                    {
                        resource_name: 'aggregated_capacity',
                        resource_description: '관련설명~~~~~~',

                        resource_value: '어쩌구',
                    },
                    {
                        resource_name: 'transmission_frequency',
                        resource_description:
                            '전체 에너지에서 재생 가능 에너지의 비율 (%)',

                        resource_value: '51.509865, -0.118092',
                    },
                    {
                        resource_name: 'aggregated_capacity',
                        resource_description: '관련설명~~~~~~',

                        resource_value: '어쩌구',
                    },
                    {
                        resource_name: 'transmission_frequency',
                        resource_description:
                            '전체 에너지에서 재생 가능 에너지의 비율 (%)',

                        resource_value: '51.509865, -0.118092',
                    },
                ],
            },
        ],
    }
    console.log(exampleObj.list[0].resource)

    return (
        <main className={styles['vpp-info-page']}>
            {exampleObj.list[0].resource.map((item, index) => (
                <InfoTable
                    key={index}
                    name={item.resource_name}
                    description={item.resource_description}
                    value={item.resource_value}
                />
            ))}
        </main>
    )
}
