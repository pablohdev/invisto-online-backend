'use strict'

const Person = use('App/Models/Person');

class PersonController {

  //mostra todos
  async index({ request, response }) {

    let user = await Person.all()


    return response.status(200).send(user);

  }
  //Mostra um registro
  async show({ request, response }) {

    const { id } = request.params;
    let user = await Person.find(id)

    return response.status(200).send(user);

  }

  //Insere Dados
  async insert({ request, response }) {

    let user = request.body;
    const { id } = await Person.create(user)

    return response.status(201).send({ id });


  };

  //Atualiza Dados
  async store({ request, response }) {

    const { id } = request.params;
    const update_user = request.body;

    let user = await Person.findOrFail(id)

    if (!user) {
      return response.status(404).send({ msg: 'Usuário não encontrado' })
    }

    user.merge(update_user)

    await user.save();

    response.status(200).send(user)

  }



  //Remove Dados
  async destroy({ request, response }) {


  }


}

module.exports = PersonController
