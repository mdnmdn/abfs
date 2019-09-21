const abfs = require ('.');

const l = console.log;

abfs.init({
  id: 'disk',
  driver: 'fs',
  root: 'data',
});

abfs.init({
  id: 'mem',    
  driver: 'memory', 
});

/*abfs.init({
  id: 'zip1',
  driver: 'zip',
  zipFile: './data/sample.zip'    
});*/

(async () => {

  

  try {
      //await abfs.ls('zip1/sdlkja sldk jasD/ASDA/ SD');
      const files = await abfs.ls('disk');
      l('data files: ', files);
      let contents = "wow!";
      const bool = await abfs.writeFile('disk/info.txt', contents, 'utf-8');
      const stats = await abfs.stats('disk/info.txt');
      //const rStream = await abfs.createReadStream('a:/info.txt');
      //const wStream = await abfs.createWriteStream('a:/info.txt');
      contents = await abfs.readFile('disk/info.txt', 'utf-8');
      
      await abfs.mv('disk/info.txt', 'disk/test/info2.txt');
      await abfs.delete('disk/test/info2.txt');
      //await abfs.copy('a:/info1.txt', 'a:/out/info3.txt');
  } catch (err) {
      console.warn(err);
  }

  
})();