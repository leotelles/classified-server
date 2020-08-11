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

    // const category = await Category.findByPk(id);

    const subcategories = await Category.findAll({
      where: { mother: id },
    });

    return res.json(subcategories);
  }
}

export default new CategoryController();
