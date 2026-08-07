import { glob } from 'node:fs/promises'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.join(process.cwd(), 'public')

let count = 0

for await (const file of glob('**/*.png', { cwd: publicDir })) {
  const src = path.join(publicDir, file)
  const out = path.join(publicDir, file.replace(/\.png$/i, '.webp'))
  const buf = await sharp(src).webp({ quality: 82 }).toBuffer()
  await writeFile(out, buf)
  const kb = (buf.length / 1024).toFixed(0)
  console.log(`OK  ${file} -> ${path.basename(out)} (${kb} KB)`)
  count++
}

console.log(`\nConverted ${count} PNG → WebP`)