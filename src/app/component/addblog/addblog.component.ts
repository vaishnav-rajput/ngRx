import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addblog } from 'src/app/services/store/blog/Blog.actions';
import { BlogModel } from 'src/app/services/store/blog/Blog.model';
import { AppStateModel } from 'src/app/services/store/Global/AppState.model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent {
  constructor(private dialogref: MatDialogRef<AddblogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>
  ){}

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)

  })

  SaveBlogs(){
    if(this.blogform.valid){
      const bloginput: BlogModel={
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string,
      }
      this.store.dispatch(addblog({bloginput}))
      this.closepopup()
    }
  }

  closepopup(){
    this.dialogref.close()
  }
}
