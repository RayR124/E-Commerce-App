const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    }
  })
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name,
  },
    {
      where: {
        id: req.params.id,
      }
    }
  )
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    }
  })
});

module.exports = router;
