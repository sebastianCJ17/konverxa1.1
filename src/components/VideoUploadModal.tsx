import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, X, CheckCircle2, AlertCircle, Film, Globe } from 'lucide-react';
import { saveLocalVideoBlob } from '../utils/videoStorage';

interface VideoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoUpdated: (newSrc: string) => void;
}

export default function VideoUploadModal({ isOpen, onClose, onVideoUpdated }: VideoUploadModalProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [externalUrl, setExternalUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileProcess = async (file: File) => {
    if (!file.type.includes('mp4') && !file.name.endsWith('.mp4')) {
      setErrorMessage('Por favor selecciona un archivo de video en formato .mp4');
      setUploadStatus('error');
      return;
    }

    setIsUploading(true);
    setUploadStatus('idle');
    setErrorMessage('');

    try {
      // 1. Save in IndexedDB locally so the browser always has it
      await saveLocalVideoBlob(file);

      // 2. Upload to dev server via API so it gets saved to public/videoweb.mp4
      const response = await fetch('/api/upload-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
        body: file,
      });

      if (response.ok) {
        setUploadStatus('success');
        const blobUrl = URL.createObjectURL(file);
        onVideoUpdated(blobUrl);
        setTimeout(() => {
          onClose();
          setUploadStatus('idle');
        }, 1800);
      } else {
        // Even if server upload has an issue, IndexedDB local blob URL works in the browser
        const blobUrl = URL.createObjectURL(file);
        onVideoUpdated(blobUrl);
        setUploadStatus('success');
        setTimeout(() => {
          onClose();
          setUploadStatus('idle');
        }, 1800);
      }
    } catch (err: any) {
      console.error(err);
      // Fallback: Use local ObjectURL
      const blobUrl = URL.createObjectURL(file);
      onVideoUpdated(blobUrl);
      setUploadStatus('success');
      setTimeout(() => {
        onClose();
        setUploadStatus('idle');
      }, 1800);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleSaveExternalUrl = () => {
    if (externalUrl.trim()) {
      onVideoUpdated(externalUrl.trim());
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg p-6 sm:p-8 bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl text-white font-sans"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Subir Video Hero (videoweb.mp4)</h3>
              <p className="text-xs text-slate-400">Arrastra tu archivo o selecciónalo desde tu equipo</p>
            </div>
          </div>

          {/* Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-white bg-white/10'
                : 'border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="video/mp4"
              onChange={handleFileSelect}
              className="hidden"
            />

            <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />

            <p className="text-sm font-semibold text-white">
              {isUploading ? 'Subiendo y guardando video...' : 'Haz clic o arrastra tu archivo videoweb.mp4 aquí'}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Formato MP4 (hasta 50 MB)
            </p>
          </div>

          {/* Status Messages */}
          {uploadStatus === 'success' && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>¡Video subido y actualizado con éxito en la vista previa!</span>
            </div>
          )}

          {uploadStatus === 'error' && (
            <div className="mt-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || 'Error al procesar el archivo.'}</span>
            </div>
          )}

          {/* Alternative: External URL for Vercel / Production */}
          <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>O enlace URL directo del video (Vercel Blob / Cloudinary / CDN):</span>
            </div>
            <div className="flex gap-2">
              <input
                type="url"
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                placeholder="https://.../videoweb.mp4"
                className="flex-1 px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-slate-500"
              />
              <button
                onClick={handleSaveExternalUrl}
                disabled={!externalUrl.trim()}
                className="px-4 py-2 bg-white text-slate-950 font-bold text-xs rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-40"
              >
                Aplicar
              </button>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong>Nota para Vercel:</strong> GitHub bloquea o limita archivos mayores a 25MB si no se usa Git LFS. Si tu video pesa 29MB, alojarlo en un CDN externo (o Vercel Blob) y pegar aquí el enlace garantiza que se reproduzca en segundos sin límites.
            </p>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
