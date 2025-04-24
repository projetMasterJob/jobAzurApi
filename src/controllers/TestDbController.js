const { testConncetion } = require('./../../test-db');

exports.getLog = async (req, res) => {
    const result = await testConnection(); 
    if (result.success) {
      res.status(200).json({ message: result.message });
    }else{
      res.status(500).json({ message: result.message, error: result.error.message });
    }  
};