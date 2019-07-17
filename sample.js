const abfs = require ('./abfs');

abfs.init({
    id: 'a',
    default: true,
    driver: 'fs',
    root: 'data',
    
});

abfs.init({
    id: 'm',    
    driver: 'memory', 
});

abfs.init({
    id: 'z',
    driver: 'zip',
    zipFile: './data/sample.zip'    
});

(async () => {
    const files = await abfs.ls('a:/');
    
    const bool = await abfs.writeFile('a:/info.txt', contents, 'utf-8');
    const stats = await abfs.stat('a:/info.txt');
    //const rStream = await abfs.createReadStream('a:/info.txt');
    //const wStream = await abfs.createWriteStream('a:/info.txt');
    const contents = await abfs.readFile('a:/info.txt', 'utf-8');
    
    await abfs.mv('a:/info.txt', 'a:/test/info2.txt');
    await abfs.delete('a:/test/info2.txt');
    //await abfs.copy('a:/info1.txt', 'a:/out/info3.txt');
    

    
})();