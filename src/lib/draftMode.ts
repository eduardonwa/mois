export function isDraftMode(request: Request): boolean {
    const cookie = request.headers.get('cookie');
    return cookie?.includes('sanity_preview=true') ?? false;
}