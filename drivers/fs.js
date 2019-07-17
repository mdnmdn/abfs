const fs = require('fs');
const fs = require('fs');

const  { drivers } = require('../constants');


class drive {

    constructor({ driver, root, ignoreMissingRoot = false }) {
        if (driver !== drivers.FS) 
            throw new Error(`Invalid driver "${driver}" expected "${drivers.FS}"`);
        
        this.driver = driver;
        this.root = root;
        this.ignoreMissingRoot = ignoreMissingRoot;

    }

    init = async () => {
        
    }

    ls = async (path, search, options = {}) => {

    }

    stat = async (path, options = {}) => {

    }

    readFile = async (path, mode, options = {}) => {

    }

    writeFile = async (path, mode, options = {}) => {

    }

    delete = async (path, mode, options = {}) => {

    }
}


module.exports = drive;