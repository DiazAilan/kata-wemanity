module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', 
    '^.+\\.ts$': 'ts-jest', 
  },
  extensionsToTreatAsEsm: ['.ts'],
};