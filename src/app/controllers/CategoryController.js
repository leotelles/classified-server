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

    const subcategories = await Category.findAll({
      where: { mother: id },
    });

    return res.json(subcategories);
  }

  async store(req, res) {
    const { title, level, mother } = await Category.create(req.body);

    return res.json({
      title,
      level,
      mother,
    });
  }
}

export default new CategoryController();
