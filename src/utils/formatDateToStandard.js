export const formatDateToStandard = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}