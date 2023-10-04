//const router = require ('express').Router()

const Accessory = require("../models/Accessory");

exports.create = (accessoryData) => Accessory.create(accessoryData);
