const csv = require('csv-parser')
const fs = require('fs')

readCsvFile = (filePath, callback) => {
    const results = [];
    fs.createReadStream(filePath)
        .pipe(
            csv({
                mapHeaders: ({ header, index }) => header.toLowerCase(),
            })
        )
        .on('data', (data) => results.push(data))
        .on('end', () =>{callback(results)});
}


showResultsCallBack = (results) => {
    console.log(results);
    const nomes = results.map(endereco => endereco.nome)
    console.log(`Nomes: ${nomes}`)
}

readCsvFile('csv-files/Cadastro-enderecos.csv', showResultsCallBack)