import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
export interface Post{
  name:string;
  accesslevel:string;
  messageType:string;
  desc:string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) {
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

 filteredBy:string;
  posts:Post[];
  originalPosts:Post[] = [
    { name: 'A', accesslevel:'class-1', messageType:'text',desc:'AA'},
    { name: 'B', accesslevel:'class-1', messageType:'photo',desc:'BB'},
    { name: 'C', accesslevel:'class-2', messageType:'photo',desc:'CC'},
    { name: 'D', accesslevel:'class-2', messageType:'vedio',desc:'DD'},
    { name: 'E', accesslevel:'class-3', messageType:'vedio',desc:'EE'},
    { name: 'F', accesslevel:'class-3', messageType:'text',desc:'FF'},
    { name: 'G', accesslevel:'class-3', messageType:'photo',desc:'GG'},
    { name: 'H', accesslevel:'class-4', messageType:'text',desc:'HH'},
    { name: 'I', accesslevel:'class-5', messageType:'text',desc:'II'}
    ];
    ngOnInit(){
      console.log("dsadada");
      this.posts = this.originalPosts;
      let param1 = this.route.snapshot.queryParams["messageType"];
      if(param1 !=null && param1 !=undefined){
        this.posts = this.originalPosts.filter(e=>e.messageType===param1);
      }
     
    }
   
    filterBy(textStr:string){
      console.log(this.posts);
      this.filteredBy = textStr;
      this.posts = this.originalPosts.filter(e=>
        {
            e.messageType==textStr
        }
        )
      console.log(this.posts);
    }


}