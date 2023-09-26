
import{CommonService} from '../common.service';
import{ Component , OnInit} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public collection:any=[];
  constructor(private CommonService:CommonService){}
  ngOnInit(): void{
  this.CommonService.getStudentList().subscribe((result)=>{
  this.collection=result;
  console.log(this.collection)
});

}
}
