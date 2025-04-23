module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    id: { type: DataTypes.CHAR(36), primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    user_id: { type: DataTypes.CHAR(36), allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
    sent_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    FOREIGN: { type: DataTypes.STRING },
  }, {
    tableName: 'notifications',
    timestamps: false,
  });

  return Notification;
};
