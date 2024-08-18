export const formatDateRange = (startDate, futureDate) => {
    // Parse the dates
    const start = new Date(startDate);
    const end = new Date(futureDate);

    // Format the dates
    const startDay = String(start.getDate()).padStart(2, '0');
    const startMonth = String(start.getMonth() + 1).padStart(2, '0');
    const endDay = String(end.getDate()).padStart(2, '0');
    const endMonth = String(end.getMonth() + 1).padStart(2, '0');

    // Return the formatted string
    return `${startDay}.${startMonth} - ${endDay}.${endMonth}`;
}