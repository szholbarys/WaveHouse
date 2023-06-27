import { Component } from '@angular/core';
// import { Wetsuit} from '../datainterfaces';
import { WetsuitsService } from '../wetsuits.service';
import { Wetsuit,  womenWetsuits, menWetsuits} from '../products'

@Component({
  selector: 'app-wetsuits',
  templateUrl: './wetsuits.component.html',
  styleUrls: ['./wetsuits.component.css']
})
// export class WetsuitsComponent {
//   wetsuits:Wetsuit[] = wetsuits;
//   ngOnInit(): void {
//     console.log(wetsuits);   
//   }
export class WetsuitsComponent {

  
  wetsuits  : Wetsuit[] 
  // wetsuitsCategory : Wetsuit[]

  constructor(private wetsuitservice :WetsuitsService){

    this.wetsuits = []
    // this.wetsuitsCategory = []
  }

  // ngOnInit(): void {

  //   this.getWetsuits()
  //   this.getWetsuitsByCategory("MENS")
  //   console.log(this.wetsuits);   
  // }

  getWomenWetsuits(){
    this.wetsuits = womenWetsuits;
  }

  getMenWetsuits(){
    this.wetsuits = menWetsuits;
  }
  // getWetsuits(){
  //   this.wetsuitservice.getWetsuits().subscribe((data) => {this.wetsuits = data
  //   console.log(data)})
  // }

  // getWetsuitsByCategory(category: String){
  //   this.wetsuitservice.getWetsuitsByCategory(category).subscribe((data) => this.wetsuitsCategory = data)
  // }
}
