const mongoose = require('mongoose');


const categorieSchema =new mongoose.Schema({
    nom: {
        type: String,
        require: true,
        unique: true,
        minlength: 4,
        trim: true
    },

    description: {
        type: String,
        require: true
    },
    specialites:
        {
            type: mongoose.Types.ObjectId,
            ref: 'Specialite',
        },
    

},
{timestamps: true}
);

module.exports = mongoose.model('Categorie', categorieSchema)

