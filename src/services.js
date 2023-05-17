export const exampleTasks = [
    {
      _id: "1",
      titre: "cleaning the house",
      dateModification: new Date(),
      statue: "todo",
      dateLimite: new Date(),
      commentaire: "Some crazy ass task",
      sousTaches: ["clean carpet","clean living room"],
    },
    {
      _id: "2",
      titre: "buying groceries",
      dateModification: new Date(),
      statue: "todo",
      dateLimite: new Date(),
      commentaire: "Need to stock up on essentials",
      sousTaches: ["milk","bread","eggs"],
    },
    {
      _id: "3",
      titre: "doing laundry",
      dateModification: new Date(),
      statue: "doing",
      dateLimite: new Date(),
      commentaire: "Lots of clothes to wash",
      sousTaches: ["whites","darks","delicates"],
    },
    {
      _id: "4",
      titre: "writing a report",
      dateModification: new Date(),
      statue: "doing",
      dateLimite: new Date(),
      commentaire: "Need to finish by end of day",
      sousTaches: ["research","outline","write"],
    },
    {
      _id: "5",
      titre: "mowing the lawn",
      dateModification: new Date(),
      statue: "done",
      dateLimite: new Date(),
      commentaire: "Yard is looking good",
      sousTaches: ["front yard","back yard"],
    },
    {
      _id: "6",
      titre: "washing the car",
      dateModification: new Date(),
      statue: "done",
      dateLimite: new Date(),
      commentaire: "Car is sparkling clean",
      sousTaches: ["wash exterior","clean interior"],
    },
  ];
  

// accounts fcts

export async function createAccount() {
return 1
}



export async function login() {
return 1
}

export async function logout() {
return 1
}

export async function isLogged(){
  return false
}
// we can use cookies, however it should return the whole user object
export async function getCurrentUser(){
  return {
    nomComplet:" John Doe"
  }
}

//tasks fcts

export async function deleteTask(task) {
return 1
}

export async function createTask(task) {
return 1
}

export async function modifyTask(task) {
return 1
}

export async function getAllTasks() {
    return exampleTasks
}

export async function getAllTasksByKeyWord(kw) {
    return exampleTasks
}
// stats

export async function getStats(){
  //must return an obj of the following type
  return {total:6,todo:1,doing:2,done:3}
}