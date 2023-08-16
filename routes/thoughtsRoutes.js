const express = require("express")
const router = express.Router()
const ThoughtController = require('../controllers/ThoughtController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ThoughtController.createThought)
router.get('/add', checkAuth, ThoughtController.createThoughtSave)
router.get('/remove', checkAuth, ThoughtController.removeThougth)
router.get('/edit/:id', checkAuth, ThoughtController.updateThought)
router.post('/edit', checkAuth, ThoughtController.updateThoughtPost)
router.get('/dashboard', ThoughtController.dashboard)
router.get('/', ThoughtController.showThoughts)

module.exports = router