const fs = require('./drivers/fs');
const memory = require('./drivers/fs');
const zip = require('./drivers/fs');
const { error, errors } = require('./utils');

const abfs = {};

const drivers = {
    fs: './drivers/fs',
    memory: './drivers/memory',
    //zip: './drivers/zip',
    //gdrive: './drivers/gdrive',
    //s3: './drivers/s3',
    //mongo: './drivers/mongo',
};

const mounts = {};

let defaultDrive;

/**
 * Init a new virtual drive
 */
abfs.init = (options) => {
  const { id, driver: driverName } = options;
  if (!driverName) throw error(errors.MISSING_DRIVER);
  if (!id) throw error(errors.MISSING_ID);
  const driverInit = drivers[driverName];
  if (!driverInit) throw error(errors.DRIVER_NOT_EXISTS, `Unkown driver ${driverName}`);
  
  if ( typeof driverInit === 'string') {
    mounts[id] = require(driverInit);
  }
}

/**
 * Init a new virtual drive
 */
abfs.registerDriver = (driver, options) => {
    // TODO
}

const getPathInfo = (composedPath) => {
    const firstSlash = composedPath.indexOf('/');
    
    const pathCode = firstSlash >= 0 ? composedPath.substring(0, firstSlash) : composedPath;
    const path = firstSlash >= 0 ? composedPath.substring(pathCode.length + 1) : '';

    const mount = mounts[pathCode];

    if (!mount) {
        throw error(errors.DRIVE_NOT_EXISTS);
    }

    return {
        path,
        pathCode,
        mount,
    }
}

abfs.ls = async (path, search = null) => {
    const pathInfo = getPathInfo(path);
    console.log(pathInfo);
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