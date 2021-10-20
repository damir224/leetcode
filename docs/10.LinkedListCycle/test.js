// const task = {  
//   // строка, уникальный идентификатор задачи  
//   id: "a1",  
//   // число, приоритет задачи (от 1 до 1024)  
//   priority: 10,  
//   // функция, возвращающая Promise;  
//   // Promise может быть resolved через длительное время  
//   job: () => {  
//       return new Promise((resolve, reject) => {  
//           if (...) {  
//               ...  
//               resolve();  
//           } else reject();  
//       });  
//   }  
// };

class TaskManager {  
  constructor(  
    N // общее число роботов-исполнителей (от 1 до 1024)  
  ){
    this.N = new Array(N).fill({  
      successCount: 0,  
      failedCount: 0,  
      tasks: [],  
      timeSpent: 0,  

      busy: false
  });
    this.queue = []
    this.queueInProgress = []
    this.queueDone = []
  }  
  // Добавление задачи в очередь  
  addToQueue(  
      task // задача для исполнения, см. формат выше  
  ){
    this.queue.push(task)
  };  
  // Promise, который запускает процесс выполнения задач и выдаёт список отчётов  
  async run(){
    const result = []
    this.queue.reverse()
    console.log(`this.N `, this.N )
    while(this.queue && this.N) {

    }
    for (let i = 0; i < this.queue.length; i++) {
      try{
        const a = await this.queue[i].job(this.queue[i].id)
        console.log(`a[${i}]`, a)
        result.push(a)
      }
      catch(errr) {
        console.log(`errr`, errr)
      }
    }
    return result
  };  
}  

// module.exports = { TaskManager };
(async () => {  
  const generateJob = (id) =>  
      function () {  
          return new Promise((resolve, reject) => {  
              setTimeout(() => {  
                  Math.random() > 0.8 ? resolve() : reject();  
              }, Math.random() * 2000);  
          });  
      };  

  const tm = new TaskManager(3);  

  tm.addToQueue({  
      id: "id0",  
      priority: 10,  
      job: generateJob("id0"),  
  });  
  tm.addToQueue({  
      id: "id1",  
      priority: 1,  
      job: generateJob("id1"),  
  });  
  tm.addToQueue({  
      id: "id2",  
      priority: 10,  
      job: generateJob("id2"),  
  });  
  tm.addToQueue({  
      id: "id3",  
      priority: 5,  
      job: generateJob("id3"),  
  });  

  const report = await tm.run();  
  console.log(report);  
})();
