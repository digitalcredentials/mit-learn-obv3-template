import QRCode from 'qrcode'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import markdownTemplate from './markdownTemplate.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // get the name of the directory
const pathToVCs = path.join(__dirname, 'certificates')

const indexOfVCs = '' + markdownTemplate

const files = fs.readdirSync(pathToVCs, { withFileTypes: true, recursive: true });

const promises = files.filter(file=>file.isFile && file.name.endsWith('.json')).map(async (file) => {
        const pathToVC = path.join(file.parentPath, file.name)
        const relativePath = pathToVC.split('certificates').pop()
        const rawGithubURL = `https://github.com/digitalcredentials/mit-learn-ob-template/raw/refs/heads/main/certificates${relativePath}`
        const localImageFilePath = pathToVC.slice(0, -4) + 'png'
        try {
            await QRCode.toFile(localImageFilePath, rawGithubURL, {})
        } catch (err) {
            console.log(`error saving ${pathToVC}: ${err}`)
        }
        return `### ${relativePath}

[${file.name}](${rawGithubURL})

![QR](${relativePath.slice(0, -4)}png)

`
    }
);

const markdownEntries = await Promise.all(promises);
const finalIndexOfVCs = indexOfVCs.concat(markdownEntries.join(''))
fs.writeFileSync(path.join(__dirname, 'certificates/certificates.md'), finalIndexOfVCs)


