const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }

  res.json({
    status: 'succes',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
