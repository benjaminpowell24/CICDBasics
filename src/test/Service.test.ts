import { getServiceName } from '../app/Service'

describe('Service test suite', () => {
  it('should return service name', () => {
    const sut = getServiceName

    const actual = sut()

    expect(actual).toBe('Cool name')
  })
})
