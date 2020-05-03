'use strict'

const Comment = use('App/Models/Comment');

class CommentController {


  //mostra todos
  async index({ request, response }) {

    let comment = await Comment.all()


    return response.status(200).send(comment);

  }

  //Mostra um registro
  async show({ request, response }) {

    const { id } = request.params;
    let comment = await Comment.find(id)

    return response.status(200).send(comment);

  }

  //Insere Dados
  async insert({ request, response }) {

    let comment = request.body;
    const { id } = await Comment.create(comment)

    return response.status(201).send({ id });


  };

}

module.exports = CommentController
