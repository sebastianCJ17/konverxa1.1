import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function videoUploadPlugin(): Plugin {
  return {
    name: 'video-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-video', (req, res) => {
        if (req.method === 'POST') {
          const targetPath = path.resolve(__dirname, 'public/videoweb.mp4');
          const writeStream = fs.createWriteStream(targetPath);
          req.pipe(writeStream);
          writeStream.on('finish', () => {
            try {
              const rootTargetPath = path.resolve(__dirname, 'videoweb.mp4');
              fs.copyFileSync(targetPath, rootTargetPath);
              const distPath = path.resolve(__dirname, 'dist/videoweb.mp4');
              if (fs.existsSync(path.dirname(distPath))) {
                fs.copyFileSync(targetPath, distPath);
              }
            } catch (e) {
              console.error(e);
            }
            const stats = fs.statSync(targetPath);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, size: stats.size }));
          });
          writeStream.on('error', (err) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
          });
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), videoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
