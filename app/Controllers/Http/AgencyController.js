'use strict'

const Agency = use('App/Models/Agency');

class AgencyController {

  //mostra todos
  async index({ request, response }) {

    let agency = await Agency.all()


    return response.status(200).send(agency);

  }
  //Mostra um registro
  async show({ request, response }) {

    const { id } = request.params;
    let agency = await Agency.find(id)

    return response.status(200).send(agency);

  }

  //Insere Dados
  async insert({ request, response }) {

    let agency = request.body;
    const { id } = await Agency.create(agency)

    return response.status(201).send({ id });


  };

  //Atualiza Dados
  async store({ request, response }) {

    const { id } = request.params;
    const update_agency = request.body;

    let agency = await Agency.find(id)

    if (!agency) {
      return response.status(404).send({ msg: 'Agency not found' })
    }

    agency.merge(update_agency)

    await agency.save();

    response.status(200).send(agency)

  }

  async destroy({ request, response }) {

    const { id } = request.params;

    let agency = await Agency.find(id)

    if (!agency) {
      return response.status(404).send({ msg: 'Agency not found' })
    }

    await agency.delete()

    return response.status(200).send({ msg: 'agency removed successfully' })

  }

}

module.exports = AgencyController
