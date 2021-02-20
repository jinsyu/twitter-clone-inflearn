import { LIKE_COLLECTION, TWEET_COLEECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
  try {
    // Already liked
    if (tweet.isLiked) {
      // Delete liked doc
      const snapshot = await LIKE_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get()
      await snapshot.docs[0].ref.delete()
      // Decrease liked number
      await TWEET_COLEECTION.doc(tweet.id).update({
        num_likes: firebase.firestore.FieldValue.increment(-1),
      })
    } else {
      // Not liked
      const doc = LIKE_COLLECTION.doc()
      await doc.set({
        id: doc.id,
        from_tweet_id: tweet.id,
        uid: store.state.user.uid,
        created_at: Date.now(),
      })

      await TWEET_COLEECTION.doc(tweet.id).update({
        num_likes: firebase.firestore.FieldValue.increment(1),
      })
    }
  } catch (e) {
    console.log('handle liked error:', e)
  }
}
