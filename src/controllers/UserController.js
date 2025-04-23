const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Erreur dans getAll:", error); // ← ajoute ça
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};


exports.getOne = async (req, res) => {
  try {
    const item = await User.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching User.' });
  }
};




exports.create = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    // Générer un token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Sauvegarder le token dans la BDD
    newUser.jwt_token = token;
    await newUser.save();

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error('Erreur création user:', error);
    res.status(400).json({ error: 'Error creating user.' });
  }
};


exports.update = async (req, res) => {
  try {
    const updated = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({ error: 'Error updating User.' });
  }
};

exports.remove = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting User.' });
  }
};
