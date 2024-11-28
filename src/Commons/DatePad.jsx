import { output } from "three/webgpu";

export const todayFormatted = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding leading zero
    const day = String(currentDate.getDate()).padStart(2, '0'); // Adding leading zero

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export const sevenDaysAgo = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7); // Subtract 7 days
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding leading zero
    const day = String(currentDate.getDate()).padStart(2, '0'); // Adding leading zero

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate; 
} 

export const getTimeId = () => {
    const today = new Date() 
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    const timeStr = `${today}`.slice(16, 24)
    console.log(timeStr, year, month, day)
    const output = `${reformatDateString(year)}-${reformatDateString(month)}-${reformatDateString(day)}_${timeStr}`
    return output
}

export const reformatDateString = (digit) => {

    let dig_string = `${digit}` 
    if (dig_string.length == 1) {
      dig_string = `0${dig_string}`
    }
    return dig_string
} 

export const getDestructuredDateTime = (timeStr) => {
    const year = timeStr.slice(0,4)     
    const month = timeStr.slice(5,7)
    const day = timeStr.slice(8,10)

    
    const givenDate = new Date(timeStr.slice(0, 10))
    const monthName = `${givenDate}`.slice(4, 7)
    console.log(monthName)

    return {
        year, 
        month, 
        monthName,
        day, 
        time: timeStr.slice(11,16)
        }
}

export const convertTo12HourFormat = (timeStr) => {
    
    const [hours, minutes] = timeStr.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12; // Convert '0' to '12' for midnight

    return `${adjustedHours}:${minutes} ${period}`;
} 


export const transformData = (data) => {
    const result = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const transformedObj = { id: key, ...data[key] };
            result.push(transformedObj);
        }
    }
    return result;
};

