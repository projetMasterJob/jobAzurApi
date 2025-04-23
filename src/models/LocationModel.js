module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: { type: DataTypes.CHAR(36), primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    entity_type: { type: DataTypes.ENUM('company',  'job') },
    entity_id: { type: DataTypes.CHAR(36), allowNull: false },
    latitude: { type: DataTypes.STRING, allowNull: false },
    longitude: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    UNIQUE: { type: DataTypes.STRING },
    FOREIGN: { type: DataTypes.STRING },
  }, {
    tableName: 'locations',
    timestamps: false,
  });

  return Location;
};
