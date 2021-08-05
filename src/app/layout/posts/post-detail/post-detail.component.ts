import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/dataTypes/postDT';
import { PostsService } from 'src/app/services/posts.service';
import { Comment } from 'src/app/dataTypes/commentDT';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public isLoading: boolean = true;
  public newComment: string = '';
  public user: any;
  public post?: Post;
  public author?: string;
  public comments?: Array<Comment>;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id') || null;

    if (id !== null) {
      this.postsService.getPostById(id).subscribe(
        data => {
          this.getUser(data.userId);
          this.getComments(id);
          this.post = data;
        },
        error => {
          alert("Ups, some kind of error occured. Please reload the page!")
        }
      );
    }
  }

  private getUser(userId: string) {
    this.postsService.getUserData(userId).subscribe(
      data => {
        this.author = data.name;
      },
      error => {
        alert("Ups, some kind of error occured. Please reload the page!")
      }
    );
  }

  private getComments(postId: string) {
    this.postsService.getComments(postId).subscribe(
      data => {
        this.comments = data;
        // getting and assinging an "normal" author name from email.
        this.comments.forEach(comment => {
          comment.author = (comment.email.split('@'))[0].replace('_', ' ').replace('.', ' ')
        });
        this.isLoading = false;
      },
      error => {
        alert("Ups, some kind of error occured. Please reload the page!")
      }
    )
  }

  public addComment() {
    let newCom = {} as Comment;
    newCom.postId = this.post!.id
    newCom.name = localStorage.getItem('name')!;
    newCom.author = localStorage.getItem('name')!;
    newCom.body = this.newComment;

    this.postsService.createComment(newCom).subscribe(
      data => {
        this.comments?.push(data);
        this.newComment = '';
      },
      error => {
        alert("Ups, some kind of error occured. Please reload the page!");
      }
    )
  }
}
