import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    const categories = await Category.findAll({
      where: { level: 0 },
    });

    return res.json(categories);
  }
}

export default new CategoryController();
