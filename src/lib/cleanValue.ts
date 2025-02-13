export function cleanValue(value: string): string {
    return value.replace(/[\u200B-\u200D\uFEFF\u00A0]/g, '');
}