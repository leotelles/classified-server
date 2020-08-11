import Adverts from '../models/Adverts';

class AdvertsController {
  async index(req, res) {
    // const { id } = req.params;

    // const adverts = await Adverts.findAll({
    //   where: { category: id },
    // });

    // return res.json(adverts);

    return res.json({ ok: true });
  }

  async store(req, res) {
    // const { title, level, mother } = await Adverts.create(req.body);

    // return res.json({
    //   title,
    //   level,
    //   mother,
    // });

    return res.json({ ok: true });
  }
}

export default new AdvertsController();
