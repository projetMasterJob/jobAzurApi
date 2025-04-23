const { Application } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Application.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Application.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Application not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Application.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Application.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Application.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Application.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Application.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Application.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Application.' });
  }
};
