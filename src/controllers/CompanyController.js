const { Company } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Company.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch companys.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Company.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Company not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Company.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Company.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Company.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Company.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Company.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Company.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Company.' });
  }
};
