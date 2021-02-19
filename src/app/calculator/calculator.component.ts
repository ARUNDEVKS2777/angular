import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:any
  value2:any
  sum:any=''
  operator:string=""
  numbers:string=''
  equ:string=''
  setOperators(opr)
  {
    if(opr=="+")
    {
      this.operator='+'
      console.log(this.operator)
    }
    else if(opr=="-")
    {
      this.operator='-'
      console.log(this.operator)
    }
    else if(opr=="*")
    {
      this.operator='*'
      console.log(this.operator)
    }
    else if(opr=="/")
    {
      this.operator='/'
      console.log(this.operator)
    }
    else if(opr=="=")
    {
      console.log("=")
    this.equ='='
    this.add(opr)
    }
    else
    {
      console.log("undefined")
    }

  }
  setNumber(num:any)
  {
  if(this.operator=="")
  {
    this.value1=num
    console.log(this.value1)
  }
  else
  {
    this.value2=num
    console.log(this.value2)
  }



  }

  constructor() { }

  add(ok)
    {
      if(this.equ=='=')
      {
     if(this.operator=='+') 
     {
    
      this.sum=parseInt(this.value1)+parseInt(this.value2)
      console.log(this.sum)
     }
     else if(this.operator=='-')
     {
       this.sum=parseInt(this.value1)-parseInt(this.value2)
       console.log(this.sum)
     }
     else if(this.operator=='*')
     {
       this.sum=parseInt(this.value1)*parseInt(this.value2)
       console.log(this.sum)
     }
     else if(this.operator=='/')
     {
       this.sum=parseInt(this.value1)/parseInt(this.value2)
       console.log(this.sum)
     }
    }
    }




  ngOnInit() {
  }

}
