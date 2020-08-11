import Category from '../models/Category';

class CategoryController {
  async mainCategory(req, res) {
    const categories = await Category.findAll({
      where: { level: 0 },
    });

    return res.json(categories);
  }

  async subCategory(req, res) {
    const { id } = req.params;
    const categories = await Category.findAll({
      where: { mother: id },
    });

    return res.json(categories);
  }

  async subCategories(req, res) {
    const categories = await Category.findAll({
      where: {
        level: [1, 2],
      },
    });

    return res.json(categories);
  }
}

export default new CategoryController();
