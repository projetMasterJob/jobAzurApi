module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    id: { type: DataTypes.CHAR(36), primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    user_id: { type: DataTypes.CHAR(36), allowNull: false },
    company_id: { type: DataTypes.CHAR(36), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    UNIQUE: { type: DataTypes.STRING },
    FOREIGN: { type: DataTypes.STRING },
    FOREIGN: { type: DataTypes.STRING },
  }, {
    tableName: 'chats',
    timestamps: false,
  });

  return Chat;
};
