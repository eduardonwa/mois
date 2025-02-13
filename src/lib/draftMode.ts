export function isDraftMode(request: Request): boolean {
    const cookie = request.headers.get('cookie');
    return cookie?.includes('sanity_preview=true') ?? false;
}

export function getDraftModeInfo(request: Request) {
  const serverDraftMode = isDraftMode(request);
  const visualEditingEnabled = import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true";
  
  //console.log('getDraftModeInfo:', { serverDraftMode, visualEditingEnabled });
  
  return { serverDraftMode, visualEditingEnabled };
}