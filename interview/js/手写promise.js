class MyPromiss{
  constructor(executor){
    this.state = 'pending';
    this.result = null;
    this.reason = null;
    executor(this.resolve.bind(this),this.reject.bind(this))
  }

  resolve(){
    if(this.state=='pending'){
      this.state = 'fulfilled'
    }
  }

  reject(){
    if(this.state=='pending'){
      this.state = 'rejected'
    }
  }
  then(onResolved,onRejected){

  }
}


