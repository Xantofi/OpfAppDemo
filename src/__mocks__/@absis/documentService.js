const documentService = require('@absis/documentService');

const mockDocumentService = {
  ...documentService,
  createExcel: jest.fn(),
};

module.exports = mockDocumentService;
