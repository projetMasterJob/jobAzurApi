module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: { type: DataTypes.CHAR(36), primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    chat_id: { type: DataTypes.CHAR(36), allowNull: false },
    sender_id: { type: DataTypes.CHAR(36), allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    sent_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    FOREIGN: { type: DataTypes.STRING },
    FOREIGN: { type: DataTypes.STRING },
  }, {
    tableName: 'messages',
    timestamps: false,
  });

  return Message;
};
