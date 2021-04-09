const axios = require('axios');
const fsPromises = require('fs/promises')

const main = async () => {
    try {
        const response = await axios.get('https://fr.wikipedia.org/wiki/Black_hat')
        await fsPromises.writeFile('index.html', response.data)
        const taille = await fsPromises.stat('index.html')
        console.log(taille)
    } catch (e) {
        console.log(e.message)
    }
}

main()