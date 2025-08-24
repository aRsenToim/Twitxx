


export function useDate(date: Date){
    const isDate = new Date(date)
    const months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"]
    return {
        monthName: months[isDate.getMonth()],
        day: isDate.getDate(),
        year: isDate.getFullYear()
    }
}