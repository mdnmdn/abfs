exports.errors = {
    MISSING_DRIVER: { msg: 'Driver option is missing' },
    NOT_SUPPORTED: { msg: 'Not supported' },
    DRIVE_NOT_EXISTS: { msg: 'The requested drive not exists' },
    DRIVER_NOT_EXISTS: { msg: 'Unkown driver' },
    READ_ONLY_FS: { msg: 'The filesystem is marked as readonly' },
}


exports.drivers = {
    FS: 'fs',
    ZIP: 'zip',
    MEMORY: 'memory',   
    S3: 's3',
    GDRIVE: 'gdrive',
};