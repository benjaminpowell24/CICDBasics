import { UsersAccess } from '../app/UsersAccess'
import { User } from '../app/UsersModel'

describe('User Access test suite', () => {
  let sut: UsersAccess

  let User: User = {
    name: 'Ben',
    position: 'Engineer',
    employedAt: new Date(Date.now()),
  }

  let userId: string

  beforeAll(async () => {
    sut = new UsersAccess()
    await sut.connectToDb()
  })

  it('should insert user', async () => {
    const userId = await sut.addUser(User)
    expect(userId).toBeTruthy()
  })

  it('should retrieve user', async () => {
    const retrievedUser = await sut.getUser(userId)

    expect(retrievedUser).toEqual(User)
  })

  afterAll(async () => {
    await sut.closeConnection()
  })
})
