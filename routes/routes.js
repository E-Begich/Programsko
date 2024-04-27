// pozivanje kontrolera vozila, i svega ostalog
const vozilaControler = require('../controlers/vozilaControler')

const router = require('express').Router()

router.post('/addVozilo', vozilaControler.addVozilo)
router.get('/getAllVozilo', vozilaControler.getAllVozilo)
router.get('/:id', vozilaControler.getVozilo)
router.put('/:id', vozilaControler.updateVozilo)
router.delete('/:id', vozilaControler.deleteVozilo)

module.exports = router