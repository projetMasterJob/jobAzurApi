const { Notification } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Notification.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Notification.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Notification not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Notification.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Notification.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Notification.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Notification.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Notification.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Notification.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Notification.' });
  }
};
