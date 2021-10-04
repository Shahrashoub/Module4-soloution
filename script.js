var names= new Array();
names[0]="yaakov";
names[1]="John";
names[2]="Jenn";
names[3]="jason";
names[4]="Paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";

for  (var i=0 ; i< names.lenght; i++){
  if (names.chartAt(0)==='J' ||names[i].chartAt(0)==='j'){
    console.log("Goodbye"+names[i])
  }
  else{
    console.log("Hello"+names[i])
  }
}


