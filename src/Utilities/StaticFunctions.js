export const redirectToPage = (history, url) => { history.push(url) }
export const selectValuesForVehicle = (allVehicles) => {
    let vehicleArr = []
    allVehicles !== null && allVehicles.map((item) => { return vehicleArr.push({ label: item.Reg, value: item.VehicleId }) })
    return vehicleArr;
}

