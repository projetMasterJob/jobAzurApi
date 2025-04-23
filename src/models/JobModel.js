module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    id: { type: DataTypes.CHAR(36), primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    company_id: { type: DataTypes.CHAR(36), allowNull: false },
    title: { type: DataTypes.STRING(100), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    salary: { type: DataTypes.STRING },
    job_type: { type: DataTypes.ENUM('full_time',  'part_time',  'internship',  'contract') },
    posted_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    FOREIGN: { type: DataTypes.STRING },
  }, {
    tableName: 'jobs',
    timestamps: false,
  });

  return Job;
};
