const { Chat } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Chat.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chats.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Chat.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Chat not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Chat.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Chat.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Chat.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Chat.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Chat.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Chat.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Chat.' });
  }
};
