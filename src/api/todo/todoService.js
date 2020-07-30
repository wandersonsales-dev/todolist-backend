const Todo = require('./todo');

// Cria todas as rotas automaticamente
Todo.methods(['get', 'post', 'put', 'delete']);

// Retorna o valor do objeto atualizado e valida as alterações
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
