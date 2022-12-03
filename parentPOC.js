import { LightningElement,api } from 'lwc';

export default class ParentPOC extends LightningElement {

@api val;
cName=null;
cName2=null;
cName3=null;
cName4=null;

handleClick1(){

    this.template.querySelector('c-child-p-o-c').changeBarColor();
}

handleClick2(){

    this.template.querySelector('c-child-p-o-c').changeBarColor2();
}

handleClick3(){

    this.template.querySelector('c-child-p-o-c').changeBarColor3();
}

handleClick4(){

    this.template.querySelector('c-child-p-o-c').changeBarColor4();
}

cHandleOne(){

    this.cName="success";
    
    
}
cHandleTwo(){

    this.cName2="success";
    
    
}
cHandleThree(){

    this.cName3="success";
    
    
}
cHandleFour(){

    this.cName4="success";
    
    
}

}