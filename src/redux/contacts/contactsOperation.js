export const getFilteredContacts = (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
      const normalizedName = contact.name.toLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
};
  
export const isDublicate = (name, contacts) => {
     return contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
}