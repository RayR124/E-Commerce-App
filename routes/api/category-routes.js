const router = require('express').Router();
const { Category, Product } = require('../../models');

// ./api/categories

//gets all categories
router.get('/', async (req, res) => {
  const results = await Category.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    } 
  })
  res.status(200).json(results);
});

// gets one category
router.get('/:id', async (req, res) => {
  const results = await Category.findOne({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(results);
});

// creates a new category
router.post('/', async (req, res) => {
  const results = await Category.create({
    category_name: req.body.category_name,
  })
  res.status(200).json(results);
});

// updates an existing category
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

//deletes an existing category
router.delete('/:id', async (req, res) => {
  const results = await Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(results);
});

module.exports = router;
