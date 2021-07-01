const upload = require("../middleware/upload");

const uploadFile = async(req, res) => {
    try {
        await upload(req, res);

        console.log(req.file);
        if (req.file == undefined) {
            return res.send(`Select a file to upload.`);
        }

        return res.send(`File has been uploaded.`);
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload image: ${error}`);
    }
};

module.exports = {
    uploadFile: uploadFile
};