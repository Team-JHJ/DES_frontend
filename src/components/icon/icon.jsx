import {
    TbBatteryAutomotive,
    TbChargingPile,
    TbSolarPanel2,
    TbWashMachine,
} from 'react-icons/tb'
import { MdLight, MdOutlineHvac, MdOutlineWindPower } from 'react-icons/md'
import { PiBatteryFullBold } from 'react-icons/pi'
import { LuContainer } from 'react-icons/lu'
import { CgSmartHomeRefrigerator, CgSmartHomeWashMachine } from 'react-icons/cg'
import { BsSpeedometer2 } from 'react-icons/bs'

export default function Icon({ menu }) {
    return menu === 'Solar' ? (
        <TbSolarPanel2 />
    ) : menu === 'Wind' ? (
        <MdOutlineWindPower />
    ) : menu === 'EV Battery' ? (
        <PiBatteryFullBold />
    ) : menu === 'ESS' ? (
        <LuContainer />
    ) : menu === 'HVAC' ? (
        <MdOutlineHvac />
    ) : menu === 'Refrigerator' ? (
        <CgSmartHomeRefrigerator />
    ) : menu === 'Lighting' ? (
        <MdLight />
    ) : menu === 'Washing Machine' ? (
        <TbWashMachine />
    ) : menu === 'EV Charger' ? (
        <TbChargingPile />
    ) : menu === 'Dishwasher' ? (
        <CgSmartHomeWashMachine />
    ) : menu === 'inverter' ? (
        <TbBatteryAutomotive />
    ) : menu === 'smartmeter' ? (
        <BsSpeedometer2 />
    ) : (
        <></>
    )
}
