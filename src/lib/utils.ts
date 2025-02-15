export const extractColor = (colorObject) => {
    // Si colorObject es null o undefined, usa valores por defecto
    const { h = 0, s = 0, l = 0, a = 0 } = colorObject || {};
    return `${h}, ${s * 100}%, ${l * 100}%, ${a}`;
};

export function cleanValue(value: string | null | undefined): string {
    if (!value) return '';
    return value.replace(/[\u200B-\u200D\uFEFF\u00A0]/g, ''); // Elimina caracteres invisibles
}