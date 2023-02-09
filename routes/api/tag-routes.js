const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// ./api/tags

//gets all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }
  })
});

// gets one tag
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

//creates a new tag
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

// updates an existing tag
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

// deletes a tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
});

module.exports = router;
