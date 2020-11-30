import { rDb } from './firebaseClient';

export const addUserToChat = (sessionId, userId, displayName, imageSrc) => {
  rDb.ref(`chat_room/${sessionId}/${userId}`).set({
    displayName,
    imageSrc
  });
}