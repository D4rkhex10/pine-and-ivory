import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');
const servicesDir = path.join(publicDir, 'services');

const galleries = [
  'corporate-decor',
  'furniture',
  'interior-decoration',
  'smart-home'
];

const manifest = {};

galleries.forEach(gallery => {
  const dirName = `${gallery}-gallery`;
  const dirPath = path.join(servicesDir, dirName);
  
  try {
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      const images = files
        .filter((f) => /\.(png|jpe?g|gif|webp|svg)$/i.test(f))
        .map((f) => `/services/${dirName}/${encodeURIComponent(f)}`);
      
      manifest[gallery] = images;
      console.log(`Found ${images.length} images for ${gallery}`);
    } else {
      console.warn(`Directory not found: ${dirPath}`);
      manifest[gallery] = [];
    }
  } catch (err) {
    console.error(`Error reading ${gallery}:`, err);
    manifest[gallery] = [];
  }
});

const manifestPath = path.join(publicDir, 'gallery-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Manifest written to ${manifestPath}`);
