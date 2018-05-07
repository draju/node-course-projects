//Also could have passed new Date() drirectly into function

const EventEmitter = require('events');

class Job extends EventEmitter {}
job = new Job();

job.on('done', function(timeDone){
	console.log('Job finished at '+timeDone);
})

now = new Date();
job.emit('done',now);

job.removeAllListeners();