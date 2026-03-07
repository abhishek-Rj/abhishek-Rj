import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function makeCircular(inputPath, outputPath) {
  try {
    const image = await loadImage(inputPath);

    // Use the shortest dimension to create a perfect circle
    const size = Math.min(image.width, image.height);

    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Clip a circle
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    // Draw the image, centering it if it's rectangular
    const dx = (size - image.width) / 2;
    const dy = (size - image.height) / 2;
    ctx.drawImage(image, dx, dy, image.width, image.height);

    // Write out the PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    console.log(`Successfully created ${outputPath}`);
  } catch (error) {
    console.error("Error creating circular image:", error.message);
  }
}

const input = path.join(__dirname, 'public', 'href.jpg');
const output = path.join(__dirname, 'public', 'href-rounded.png');
makeCircular(input, output);
