import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, filename) {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    const writer = fs.createWriteStream(path.join(imagesDir, filename));
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading image ${filename}:`, error.message);
  }
}

async function fetchAndSaveData() {
  try {
    console.log('Fetching data from FakeStore API...');
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    
    console.log(`Fetched ${products.length} products`);
    
    // Download images and update image paths
    const updatedProducts = await Promise.all(
      products.map(async (product, index) => {
        const imageExtension = path.extname(product.image) || '.jpg';
        const imageFilename = `product_${product.id}${imageExtension}`;
        
        // Download image
        await downloadImage(product.image, imageFilename);
        
        // Update the image path to local path
        return {
          ...product,
          image: `/images/${imageFilename}`
        };
      })
    );
    
    // Save products data to JSON file
    const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
    const dataDir = path.dirname(dataPath);
    
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(dataPath, JSON.stringify(updatedProducts, null, 2));
    console.log(`Data saved to ${dataPath}`);
    console.log(`Images saved to ${imagesDir}`);
    
    return updatedProducts;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

// Run the function
fetchAndSaveData()
  .then(() => {
    console.log('Data fetching completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Data fetching failed:', error);
    process.exit(1);
  });