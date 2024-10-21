import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addblog, updateblog } from 'src/app/services/store/blog/Blog.actions';
import { BlogModel } from 'src/app/services/store/blog/Blog.model';
import { getblogbyid } from 'src/app/services/store/blog/Blog.selectors';
import { AppStateModel } from 'src/app/services/store/Global/AppState.model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  constructor(private dialogref: MatDialogRef<AddblogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  pagetitle="";
  editblogid=0;
  editdata !: BlogModel

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)

  })

  ngOnInit(): void {
    this.pagetitle=this.data.title 
    console.log("data", this.data)
    if(this.data.isedit){
      this.editblogid = this.data.id  
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
        this.editdata = _data;
        this.blogform.setValue({id: this.editdata.id, title: this.editdata.title, description: this.editdata.description})
      })
    }
  }

  SaveBlogs(){
    if(this.blogform.valid){
      const bloginput: BlogModel={
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string,
      }
      if(this.data.isedit){
        bloginput.id = this.blogform.value.id as number
        this.store.dispatch(updateblog({bloginput: bloginput}))
      }else {
        this.store.dispatch(addblog({bloginput}))

      }
      this.closepopup()
    }
  }

  closepopup(){
    this.dialogref.close()
  }
}
