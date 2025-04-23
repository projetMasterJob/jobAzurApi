const { Job } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Job.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs.' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const item = await Job.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Job not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Job.' });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await Job.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating Job.' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Job.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Job.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await Job.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting Job.' });
  }
};
