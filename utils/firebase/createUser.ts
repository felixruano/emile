import { db } from './firebaseClient';

const createUser = async (
    uid,
    givenName,
    familyName,
    displayName,
    email,
    verifiedEmail,
    locale,
    photoURL,
    creationTime,
    role,
    referralCode
) => {
    await db
        .collection('users')
        .doc(uid)
        .set({
            uid,
            given_name: givenName,
            family_name: familyName,
            displayName,
            email,
            verified_email: verifiedEmail,
            locale,
            photoURL,
            creation_time: creationTime,
            role,
            referral_code: referralCode,
        })
        .then(() => {
            console.log('Document successfully written!');
            db.collection('referralCodes')
                .doc(referralCode)
                .set({ referral_userId: uid, used_count: 0 });
        })
        .catch((error) => console.log(error));
};

export default createUser;
