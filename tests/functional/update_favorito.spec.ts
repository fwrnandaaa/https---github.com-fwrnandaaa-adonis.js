import { test } from '@japa/runner'

test.group('Update favorito', () => {
  test('atualizar favorito', async ({ client }) => {
    const resposta = await client
      .put('/favoritos/1') // Utilize PUT para atualizar o favorito
     
    resposta.assertStatus(200)
  })

  test('atualizar favorito não existente', async ({ client }) => {
    const resposta = await client.put('/favoritos/nonexist').send({}) // Envie uma requisição vazia para um favorito inexistente
    resposta.assertStatus(404)
  })
})
