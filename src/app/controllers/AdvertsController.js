import Adverts from '../models/Adverts';

class AdvertsController {
  async index(req, res) {
    const { category } = req.params;

    const adverts = await Adverts.findAll({
      where: { category },
    });

    return res.json(adverts);
  }

  async detail(req, res) {
    const { id } = req.params;

    const ad = await Adverts.findAll({
      where: { id },
    });

    return res.json(ad);
  }

  async store(req, res) {
    const {
      category,
      title,
      general_info,
      description,
      price,
      location,
      condition,
    } = await Adverts.create(req.body);

    return res.json({
      category,
      title,
      general_info,
      description,
      price,
      location,
      condition,
    });
  }
}

export default new AdvertsController();
