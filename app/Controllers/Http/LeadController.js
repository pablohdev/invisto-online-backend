'use strict'

const Lead = use('App/Models/Lead');

class LeadController {

  //mostra todos
  async index({ request, response }) {

    let lead = await Lead.all()


    return response.status(200).send(lead);

  }

  //Mostra um registro
  async show({ request, response }) {

    const { id } = request.params;
    let lead = await Lead.find(id)

    return response.status(200).send(lead);

  }

  //Insere Dados
  async insert({ request, response }) {

    let lead = request.body;
    const { id } = await Lead.create(lead)

    return response.status(201).send({ id });


  };

}

module.exports = LeadController
