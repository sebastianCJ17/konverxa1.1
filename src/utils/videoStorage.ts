// IndexedDB helper to persist video file locally across browser reloads
const DB_NAME = 'KonverxaMediaDB';
const STORE_NAME = 'videos';
const VIDEO_KEY = 'hero_videoweb';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveLocalVideoBlob(blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(blob, VIDEO_KEY);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Could not save video to IndexedDB', err);
  }
}

export async function getLocalVideoBlob(): Promise<Blob | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(VIDEO_KEY);
    return new Promise((resolve) => {
      request.onsuccess = () => {
        resolve(request.result as Blob || null);
      };
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}
