export const MAX_DESC_CHAR_LIMIT = 80;
export const getMetaDescription = (summary: string, desc: string) => {
    if (summary.length <= MAX_DESC_CHAR_LIMIT) {
        return (summary + " " + desc).slice(0, 80) + "...";
    }
    return summary.slice(0, 80) + "...";
}