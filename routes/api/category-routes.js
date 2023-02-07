const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const results = await Category.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    } 
  })
  res.status(200).json(results);
});

router.get('/:id', async (req, res) => {
  const results = await Category.findOne({
    where: {
      id: req.params.id,
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    }
  })
  res.status(200).json(results);
});

router.post('/', async (req, res) => {
  const results = await Category.create({
    category_name: req.body.category_name,
  })
  res.status(200).json(results);
});

router.put('/:id', async (req, res) => {
  const results = await Category.update({
    category_name: req.body.category_name,
  },
    {
      where: {
        id: req.params.id,
      }
    })
  res.status(200).json(results);
});

router.delete('/:id', async (req, res) => {
  const results = await Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(results);
});

module.exports = router;
