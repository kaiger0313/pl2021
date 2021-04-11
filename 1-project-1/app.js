let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})

console.log(contactList)
