module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    id: { type: DataTypes.CHAR(36), primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    user_id: { type: DataTypes.CHAR(36), allowNull: false },
    job_id: { type: DataTypes.CHAR(36), allowNull: false },
    status: { type: DataTypes.ENUM('pending',  'accepted',  'rejected') },
    applied_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    FOREIGN: { type: DataTypes.STRING },
    FOREIGN: { type: DataTypes.STRING },
  }, {
    tableName: 'applications',
    timestamps: false,
  });

  return Application;
};
