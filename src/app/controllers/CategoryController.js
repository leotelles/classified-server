import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    res.json({ ok: true });
  }
}

export default new CategoryController();
