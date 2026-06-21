const fs = require('fs');
const path = require('path');

const albumsDir = path.join(__dirname, 'public', 'albums');
const outputFilePath = path.join(__dirname, 'src', 'data', 'albumsData.js');

const albumNamesMap = {
  'christmass': 'Christmas',
  'CommunityEvents': 'Community Events',
  'DMCfeast': 'Feast of Divine Mercy',
  'easter': 'Easter',
  'goodfriday': 'Good Friday',
  'maundy': 'Maundy Thursday',
  'youthday': 'Youth Day'
};

if (fs.existsSync(albumsDir)) {
  const folders = fs.readdirSync(albumsDir);
  const albumsData = [];

  let idCounter = 1;
  for (const folder of folders) {
    const folderPath = path.join(albumsDir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
      const photos = files.map(file => `/albums/${folder}/${file}`);
      
      albumsData.push({
        id: idCounter++,
        title: albumNamesMap[folder] || folder,
        cover: photos.length > 0 ? photos[0] : '',
        photos: photos
      });
    }
  }

  const fileContent = `export const albumsData = ${JSON.stringify(albumsData, null, 2)};\n`;
  
  // Ensure directory exists
  const dir = path.dirname(outputFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputFilePath, fileContent);
  console.log('Successfully generated albumsData.js');
} else {
  console.log('Albums directory not found at ' + albumsDir);
}
