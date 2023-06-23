import Dexie from "dexie";

const db = new Dexie("savedPasswords");
db.version(1).stores({
  passwords: "++id,website,password",
});

export const addPassword = async (website, password) => {
  try {
    const existingEntry = await db.passwords.get({ website });
    if (existingEntry) {
      await db.passwords.update(existingEntry.id, { password });
    } else {
      await db.passwords.add({ website, password });
    }
  } catch (error) {
    console.error("Error while saving to the DB:", error);
  }
};

export default db;