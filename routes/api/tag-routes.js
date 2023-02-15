const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// ./api/tags

//gets all tags
router.get('/', async (req, res) => {
  const tag = await Tag.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }
  })
  res.json(tag);
});

// gets one tag
router.get('/:id', async (req, res) => {
  const tag = await Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }
  })
  res.json(tag);
});

//creates a new tag
router.post('/', async (req, res) => {
  const tag = await Tag.create({
    tag_name: req.body.tag_name,
  },
    {
      where: {
        id: req.params.id,
      }
    })
    res.json(tag);
});

// updates an existing tag
router.put('/:id', async (req, res) => {
  const tag = await Tag.update({
    tag_name: req.body.tag_name,
  },
    {
      where: {
        id: req.params.id,
      }
    })
    res.json(tag);
});

// deletes a tag
router.delete('/:id', async (req, res) => {
  const tag = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.json(tag);
});

module.exports = router;
