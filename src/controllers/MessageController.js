const { Message } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Message.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Message.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Message not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Message.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Message.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Message.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Message.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Message.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Message.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Message.' });
  }
};
