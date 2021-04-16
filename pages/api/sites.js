import db from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const sitesRef = db.firestore().collection('sites');

    const snapshot = await sitesRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return res.status(404).json({ message: 'Not found', error: 404 });
    }
    const sites = [];
    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json({ sites });
  } catch (e) {
    res.status(500).error(e);
  }
};
