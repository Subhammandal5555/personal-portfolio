const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const redirectsPath = path.join(outDir, '_redirects');

try {
  // Ensure the out/ directory exists before writing
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Write the precise Netlify rewrite rule
  fs.writeFileSync(redirectsPath, '/* /index.html 200\n', 'utf8');
  console.log('Successfully configured Netlify SPA routing: _redirects generated in out/');
} catch (error) {
  console.error('Failed to generate _redirects file:', error);
  process.exit(1);
}
