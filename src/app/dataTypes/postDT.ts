export interface Post {
  id: string,
  userId: string,
  author: string,
  title: string,
  body: string,
  comments: Array<Comment>
}
