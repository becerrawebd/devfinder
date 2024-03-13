export function formatUTCDate(utcDate: string){
    const newDate = new Date(utcDate)
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric"
    }
    return Intl
        .DateTimeFormat('en-GB',options)
        .format(newDate)
}