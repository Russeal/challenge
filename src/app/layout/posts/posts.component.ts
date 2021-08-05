import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/dataTypes/postDT';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public isLoading: boolean = true;
  private users?: Array<any>;
  public posts?: Array<Post>;
  public page: number = 1;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

    this.getUsers();

    setTimeout(() => {
      this.getPosts(0, 10);
    }, 50);

  }

  private getPosts(from: number, to: number) {
    this.postsService.getAllPosts(from, to).subscribe(
      (data) => {
        this.posts = data;
        this.posts.forEach(post => {
          try {
            post.author = this.getUserName(post.userId);
          } catch (error) {
            alert("Ups, some kind of error occured. Please reload the page!")
          }
        })
        this.isLoading = false;
      },
      (error) => {
        alert("Ups, some kind of error occured. Please reload the page!")
      }
    );
  }

  public changePage() {
    setTimeout(() => {
      this.isLoading = true;
      this.getPosts((this.page - 1) * 10, this.page * 10);
    }, 50);
  }

  private getUsers() {
    this.postsService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        alert("Ups, some kind of error occured. Please reload the page!")
      }
    );
  }

  private getUserName (userId: string) {
    if (this.users) {
      for (let user of this.users) {
        if (user.id == userId) {
          return user.name;
        }
      }
      return '';
    }
  }

}
