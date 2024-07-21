// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age = "", bio = "" }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }
  searchUser(firstName = "", lastName = "", email = "") {
    const searchItems = { firstName, lastName, email };
    const allUsers = this.getUsers();
    const SearchUsers = [];
    Object.keys(searchItems).map((sItem) => {
      allUsers.map((user) => {
        if (user[sItem] === searchItems[sItem]) {
          if (!SearchUsers.some((searchUser) => searchUser.id === user.id)) {
            SearchUsers.push(user);
          }
        }
      });
    });
    return SearchUsers;
  }

  updateUser(id, { firstName, lastName, email, age = "", bio = "" }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
