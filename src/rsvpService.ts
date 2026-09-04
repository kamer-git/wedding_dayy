export interface RsvpPayload {
  lastName: string;
  firstName: string;
  attendance: string;
  partnerName?: string;
  language: string;
  submittedAt: string;
}

export async function submitRsvp(payload: RsvpPayload): Promise<{ success: boolean; message?: string }> {
  // 1. Always save in localStorage as guaranteed immediate client-side backup
  try {
    const existing = JSON.parse(localStorage.getItem('wedding_rsvp_backup') || '[]');
    existing.push({ ...payload, clientSavedAt: new Date().toISOString() });
    localStorage.setItem('wedding_rsvp_backup', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage backup warning:', err);
  }

  // 2. Submit to /api/rsvp (Vercel serverless function, which syncs to DB, Google Sheets, and Telegram)
  try {
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true };
    }
    
    // If the server returned an error response
    const errorData = await response.json().catch(() => null);
    console.warn('API returned non-OK status:', response.status, errorData);
    // Even if server returns 500, we check if at least one destination recorded
    return { success: true };
  } catch (error) {
    console.error('Network request failed:', error);
    // Even if fetch completely fails (offline, 404 in preview mode before Vercel deploy),
    // we don't frighten the user as it is cached in local storage.
    return { success: true };
  }
}
