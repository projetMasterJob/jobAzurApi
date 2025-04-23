const { Location } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Location.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch locations.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Location.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Location not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Location.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Location.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Location.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Location.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Location.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Location.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Location.' });
  }
};
