import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient() // so tem 1 instancia disso ( pois 1 ja ocupa todas as conexoes)
// const prisma = new PrismaClient({log: ["query"]}) // loga todas as queries q ele faz 

async function main() {
  // await prisma.user.deleteMany() // deleta tudo do database
  const users = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 27,
        name: "Kyle"
      }
      // distinct
      // pagination
    }
  })
  console.log(users)
}

main()
  .catch(e => {
    console.log(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })