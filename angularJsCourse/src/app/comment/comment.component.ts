import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { CommentService } from './comment.service';
import { Comments } from './comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService,
    private activatedRoute: ActivatedRoute) {}

  comments$ = this.activatedRoute.data.pipe(
   pluck('comments') // This is using the resolve methid
  );
  // comments$ = this.commentService.getComments(); //Here we call the method to get data on the view

  // To invoick this outside
  comments: Comments[] = [];
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      // console.log(data['comments']);
      this.comments = data['comments']
    })
  }
}
