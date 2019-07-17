const fs = require('./drivers/fs');
const memory = require('./drivers/fs');
const zip = require('./drivers/fs');

const abfs = {};

const drivers = {
    fs: './drivers/fs',
    memory: './drivers/memory',
    zip: './drivers/zip',
    gdrive: './drivers/gdrive',
    s3: './drivers/s3',
    mongo: './drivers/mongo',
};

const drives = {};

let defaultDrive;

/**
 * Init a new virtual drive
 */
abfs.init = (options) => {
    
}

/**
 * Init a new virtual drive
 */
abfs.registerDriver = (driver, options) => {

}

const getPathInfo = (path) => {
    const segments = path.split(':');
    if (segments.length <= 1) {
        if (!defaultDrive)
    å}
}

abfs.ls = async (path, search = null) => {
    const pathInfo = getPathInfo(path);
};

abfs.stats = async (path) => {
    const pathInfo = getPathInfo(path);
};

abfs.readFile = async (path, mode) => {
    const pathInfo = getPathInfo(path);
};

abfs.writeFile = async (path, data) => {
    const pathInfo = getPathInfo(path);
};

abfs.mv = async (pathSrc, pathDest) => {
    const pathInfoSrc = getPathInfo(pathSrc);
    const pathInfoDest = getPathInfo(pathDest);
};

abfs.delete = async (path) => {
    const pathInfo = getPathInfo(path);
};


module.exports = abfs;