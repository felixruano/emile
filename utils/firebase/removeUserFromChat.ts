import { rDb } from './firebaseClient';

export const removeUserFromChat = (sessionId, userId) => {
  rDb.ref(`chat_room`).child(sessionId).child(userId).remove();
}