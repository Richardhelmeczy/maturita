import { createDB } from '../../src/lib/db'
import { faker } from '@faker-js/faker'

async function seedDB() {
  console.log('Seeding database...')

  const db = createDB()

  await db.deleteFrom('productsReviews').execute()
  await db.deleteFrom('basket').execute()
  await db.deleteFrom('products').execute()
  await db.deleteFrom('appointments').execute()
  await db.deleteFrom('doctors').execute()

  const products = []

  for (let i = 0; i < 50; i++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.finance.amount(1, 1000, 2)),
    })
  }

  await db.insertInto('products').values(products).execute()
  const createdProducts = await db.selectFrom('products').select('id').execute()

  const reviews = []

  for (const createdProduct of createdProducts) {
    const nReviews = faker.datatype.number({ min: 0, max: 5 })

    for (let i = 0; i < nReviews; i++) {
      reviews.push({
        productId: createdProduct.id,
        rating: faker.datatype.number({ min: 1, max: 5 }),
        content: faker.lorem.sentences(faker.datatype.number({ min: 1, max: 5 })),
        username: faker.internet.userName(),
      })
    }
  }

  if (reviews.length > 0) {
    await db.insertInto('productsReviews').values(reviews).execute()
  }

  const doctors = []
  doctors.push({
    id: 'user_2cPXGhoI9XD4fjzJL1VwMbZwqQp',
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: 'neviem@gmial.com',
    adress: 'Sustekova',
    phone: '0944902321'
  })

  for (let i = 0; i < 6; i++) {
    doctors.push({
      id: i.toString(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: 'neviem@gmial.com',
      adress: 'Sustekova',
      phone: '0944902321'
    })
    
  }

  await db.insertInto('doctors').values(doctors).execute()

  console.log('Done')
}
seedDB()
