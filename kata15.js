const organizeInstructors = function (instructors) {
  let iOS = []
  let web = []
  let blockchain = []
  let program = {}
  for (let y = 0; y < instructors.length; y++) {
    if(instructors[y].course === "iOS"){
      iOS.push(instructors[y].name) 
    } else if (instructors[y].course === "Web"){
      web.push(instructors[y].name)
    } else if (instructors[y].course === "Blockchain"){
      blockchain.push(instructors[y].name)
    }
  }
  if (blockchain.length !== 0){
    program.Blockchain = blockchain
  }
  if (iOS.length !== 0){
    program.iOS = iOS
  }
  if (web.length !== 0){
    program.Web = web
  }
  
  
  return program


};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));