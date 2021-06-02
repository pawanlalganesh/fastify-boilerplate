import { FastifyReply, FastifyRequest } from 'fastify'
import { UserModel } from '../interface/user'
import userService from '../service/user'

interface IQueryParams {
  id: string
}

const getAllUser = (request: FastifyRequest, reply: FastifyReply) => {
  const users = userService.getAllUser()
  return users
}

const getUser = (
  request: FastifyRequest<{
    Params: IQueryParams
  }>,
  reply: FastifyReply
) => {
  const userId = request.params.id
  const user = userService.getUser(userId)
  return user
}

const createUser = (
  request: FastifyRequest<{
    Body: UserModel
  }>,
  reply: FastifyReply
) => {
  const userModel = request.body
  const user = userService.createUser(userModel)
  return user
}

export default { getAllUser, getUser, createUser }
