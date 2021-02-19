import { TWEET_COLEECTION } from '../firebase'

export default (tweetBody, currentUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = TWEET_COLEECTION.doc()
      await doc.set({
        id: doc.id,
        tweet_body: tweetBody,
        uid: currentUser.uid,
        created_at: Date.now(),
        num_comments: 0,
        num_retweets: 0,
        num_likes: 0,
      })
      resolve(true)
    } catch (e) {
      reject(e)
    }
  })
}
