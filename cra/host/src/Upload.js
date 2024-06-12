// upload.js
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
require('dotenv').config();

const {
  OVH_ACCESS_KEY,
  OVH_SECRET_KEY,
  OVH_ENDPOINT,
  OVH_REGION,
  OVH_BUCKET_NAME
} = process.env;

const s3 = new AWS.S3({
  accessKeyId: OVH_ACCESS_KEY,
  secretAccessKey: OVH_SECRET_KEY,
  endpoint: OVH_ENDPOINT,
  region: OVH_REGION,
  s3ForcePathStyle: true, 
});

const upload = multer({ dest: 'uploads/' });

const app = express();

/**
 * Fonction pour uploader un fichier
 * @param {string} filePath - Chemin du fichier à uploader
 * @param {string} bucketName - Nom du bucket
 * @param {string} key - Clé du fichier dans le bucket
 */
const uploadFile = (filePath, bucketName, key) => {
  // Lire le fichier
  const fileContent = fs.readFileSync(filePath);

  // Configurer les paramètres de l'upload
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fileContent,
  };

  // Uploader le fichier
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading file:', err);
      return;
    }
    console.log(`File uploaded successfully at ${data.Location}`);
  });
};

app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  const key = `uploads/${req.file.originalname}`;

  uploadFile(filePath, OVH_BUCKET_NAME, key);

  res.send('File uploaded successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
