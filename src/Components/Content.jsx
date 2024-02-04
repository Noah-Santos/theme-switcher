import {useContext} from 'react';
import {StyleContext} from '../App'

const Content = () => {
    let {theme, info} = useContext(StyleContext);

    return (
        <>
            {/* determines whether or not to load the light or dark mode */}
            <div className={theme==='light' ? 'contentSection' : 'contentSection darkContent'}>
                {/* maps through the data and creates individual elements */}
                {info.map(vehicle=>{
                    return (
                        <div className={theme==='light' ? "vehicleSection" : "vehicleSection darkVehicle"} key={vehicle.id}>
                            <p className={theme==='light' ? "vehicleTitle" : "vehicleTitle darkVehicleTitle"}><span className="vehicleName">{vehicle.name}</span> - {vehicle.type}</p>
                            <p className={theme==='light' ? "vehicleDesc" : "vehicleDesc darkVehicleDesc"}><span className="vehicleDescription">Description: </span>{vehicle.description}</p>
                            <img src={vehicle.image} alt="vehicle image" className='vehicleImg'/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Content;