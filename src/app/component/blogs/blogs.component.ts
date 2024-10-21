import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/services/store/blog/Blog.model';
import { getblog } from 'src/app/services/store/blog/Blog.selectors';
import { AppStateModel } from 'src/app/services/store/Global/AppState.model';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog){}

  bloglist !: BlogModel[]

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.bloglist = item
    })
  }

  AddBlog(){
    this.OpenPopup(0, 'Add Blog')
  }

  EditBlog(id:any){
    this.OpenPopup(id, 'Edit Blog', true)
  }

  OpenPopup(id:any, title: any, isedit=false){
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data:{
        id: id,
        title: title,
        isedit: isedit
      }

    })
  }
}
