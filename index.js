const fs = require('./drivers/fs');
const memory = require('./drivers/fs');
const zip = require('./drivers/fs');
const { error, errors } = require('./utils');

const abfs = {};

const drivers = {
    fs: './drivers/fs',
    memory: './drivers/memory',
    zip: './drivers/zip',
    gdrive: './drivers/gdrive',
    s3: './drivers/s3',
    mongo: './drivers/mongo',
};

const mounts = {};

let defaultDrive;

/**
 * Init a new virtual drive
 */
abfs.init = (options) => {
    mounts[options.id] = options;
}

/**
 * Init a new virtual drive
 */
abfs.registerDriver = (driver, options) => {
    // TODO
}

const getPathInfo = (composedPath) => {
    const firstSlash = composedPath.indexOf('/');
    
    const drivePath = firstSlash >= 0 ? composedPath.substring(0, firstSlash) : composedPath;
    const path = firstSlash >= 0 ? composedPath.substring(drivePath.length + 1) : '';
    
    if (!mounts[drivePath]) {
        throw error(errors.DRIVE_NOT_EXISTS);
    }

    return {
        path,
        pathCode,
        mount: mounts[drivePath]
    }

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