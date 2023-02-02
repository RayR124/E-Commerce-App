const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
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
  Tag.create({
    tag_name: req.body.tag_name,
  },
    {
      where: {
        id: req.params.id,
      }
    })
});

router.put('/:id', (req, res) => {
  Tag.update({
    tag_name: req.body.tag_name,
  },
    {
      where: {
        id: req.params.id,
      }
    })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
});

module.exports = router;
