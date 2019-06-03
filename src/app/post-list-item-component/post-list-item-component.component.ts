import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    

  constructor() { }

  ngOnInit() {
  }
    
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postDate: string;

    
    plusLike() {
    this.postLikes=this.postLikes + 1;
    }
    
    lessLike() {
    this.postLikes=this.postLikes - 1;
    }
    


}
