import { rDb } from './firebaseClient';

export const getAllUsersInChat = async (sessionId) => {
  const chatRef = rDb.ref(`chat_room/${sessionId}`);
  let temp;
  await chatRef.on('value', (snapshot) => {
    temp = snapshot.val();
  })
  return temp;
}