import { LightningElement,api } from 'lwc';

export default class ParentPOC extends LightningElement {

@api val;

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


}

}