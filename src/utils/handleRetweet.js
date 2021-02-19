import { RETWEET_COLLECTION, TWEET_COLEECTION } from '../firebase'
import store from '../store'
import firebase from 'firebase'

export default async (tweet) => {
  try {
    const doc = RETWEET_COLLECTION.doc()
    await doc.set({
      id: doc.id,
      from_tweet_id: tweet.id,
      uid: store.state.user.uid,
      created_at: Date.now(),
    })

    await TWEET_COLEECTION.doc(tweet.id).update({
      num_retweets: firebase.firestore.FieldValue.increment(1),
    })
  } catch (e) {
    console.log('handle retweet error:', e)
  }
}
