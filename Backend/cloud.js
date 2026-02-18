const cloudianry = require('cloudinary')

const uploadMedia = (req, res) => {
    cloudianry.uploader
        .upload("/assets/images/cloddd.jpg",)
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

module.exports = { uploadMedia }
