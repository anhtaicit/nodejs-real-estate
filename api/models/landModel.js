var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var landSchema = new Schema({
    area: String,
    block: String,
    portion: String,
    owner: String,
    ownerPhone: String,
    referrer: String,
    referrerPhone: String,
    depositDate: Date,
    price: String,
    note: String,
    isSold: Boolean,
    soldDate: Date,
    addedDate: Date
});

var Lands = mongoose.model("Lands", landSchema);

Lands.getAll = () => {
    return Lands.find({});
}

Lands.getLand = (id) => {
    return Lands.findById({_id: id});
}

Lands.addLand = (landToAdd) => {
    return Lands.create(landToAdd);
}

Lands.editLand = (id, landToUpdate) => {
    return Lands.update({_id : id}, landToUpdate);
}

Lands.deleteLand = (id) => {
    return Lands.remove({_id: id});
}

module.exports = Lands;