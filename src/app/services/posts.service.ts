import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from '../dataTypes/postDT';
import { Comment } from '../dataTypes/commentDT';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private GeneralURL = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  getAllPosts(from: number, to: number): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.GeneralURL + '/posts?_start=' + from + '&_end=' + to);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.GeneralURL + '/posts/' + id);
  }

  getComments(postId: string): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(this.GeneralURL + '/posts/' + postId + '/comments');
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.GeneralURL + '/posts/' + comment.postId + '/comments', comment);
  }

  getUsers() {
    return this.http.get<any>(this.GeneralURL + '/users');
  }

  getUserData(userId: string) {
    return this.http.get<any>(this.GeneralURL + '/users/' + userId);
  }

}
