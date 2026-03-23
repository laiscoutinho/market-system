const categoryRepository = require('../repository/category.repository');
const AppError = require('../utils/app.error');

const create = async ({ name }) => {
    const exists = await categoryRepository.findByName(name);
    if (exists) throw new AppError('Categoria já cadastrada', 400);

    return categoryRepository.create({ name });
};

const findAll = async () => {
    return categoryRepository.findAll();
};

module.exports = { create, findAll };
