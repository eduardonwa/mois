import { isDraftMode } from './draftMode';

export function getPerspective(request: Request): "published" | "previewDrafts" {
  // Si estamos en modo borrador (determinado por la cookie), usamos previewDrafts
  if (isDraftMode(request)) {
    return "previewDrafts";
  }
  
  // Si la solicitud viene del estudio de Sanity, usamos previewDrafts
  const referer = request.headers.get('referer');
  if (referer && referer.includes('sanity.studio')) {
    return "previewDrafts";
  }
  
  // En cualquier otro caso, usamos published
  return "published";
}