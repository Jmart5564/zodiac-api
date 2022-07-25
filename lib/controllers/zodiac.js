const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

router
  .get('/:id', (req, res) => {
    console.log('id param', req.params.id);
    const getZodiac = zodiac.find((getZodiac) => getZodiac.id === req.params.id);
    res.json(getZodiac);
  })
  .get('/', (req, res) => {
    console.log('id param:', req.params.id);
    const ids = zodiac.map((getZodiac) => ({ id: getZodiac.id, name: getZodiac.name }));
    console.log(ids);
    res.json(ids);
  });


module.exports = router;
