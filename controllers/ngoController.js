const { json } = require("express");
const service = require("../models/ngo");

const allNgos = async (res, req) => {
    const ngos = await Ngo.find();
    res.status(200).json({service});
};

const getNgo = async (res, req) => {
    res.Send("Get Ngo");
};

const createNgo = async (res, req) => {
    const name = req.body.name;
    const program = req.body.program;
    const activity = req.body.activity;
    const overview = req.body.overview;

console.log(name);
console.log(program);
console.log(activity);
console.log(overview);

res.send("Create Ngo");
};

const updateNgo = async (res, req) => {
    res.send("Update Ngo");
};

const deleteNgo = async (res, req) => {
    res.send("Delete Ngo");
};

module.exports = {
    allNgos,
    getNgo,
    createNgo,
    updateNgo,
    deleteNgo,
};