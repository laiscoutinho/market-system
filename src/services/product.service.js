const productRepository = require('../repository/product.repository');
const categoryRepository = require('../repository/category.repository');
const AppError = require('../utils/app.error');

const create = async ({ name, price, stock, categoryId }) => {
    const category = await categoryRepository.findById(categoryId);
    if (!category) throw new AppError('Categoria não encontrada', 404);

    return productRepository.create({ name, price, stock, categoryId });
};

const findAll = async () => {
    return productRepository.findAll();
};

const update = async (id, data) => {
    const product = await productRepository.findById(id);
    if (!product) throw new AppError('Produto não encontrado', 404);

    await productRepository.update(id, data);
    return productRepository.findById(id);
};

const remove = async (id) => {
    const product = await productRepository.findById(id);
    if (!product) throw new AppError('Produto não encontrado', 404);

    await productRepository.remove(id);
    return { message: 'Produto removido com sucesso' };
};

module.exports = { create, findAll, update, remove };
