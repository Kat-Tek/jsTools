var CPU = {
    coreCount: function() {
      return navigator.hardwareConcurrency || 4;
    },
   
    createWorker: function(workerCode) {
      const blob = new Blob([workerCode], { type: 'application/javascript' });
      const workerUrl = URL.createObjectURL(blob);
      return new Worker(workerUrl);
    },
   
    workerPost: function(data, worker) {
      worker.postMessage(data)
   
    },  
    example: function() {
        console.log("Help: Usage: CPU.example(); Functions: CPU.createWorker(code): Creates a CPU worker. CPU.workerPost(data, worker) Posts data to the worker. CPU.coreCount() Returns number of CPU cores.");
    }
};