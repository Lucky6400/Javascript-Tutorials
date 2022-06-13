'use strict';

/*
? RUNTIME: contains all pieces necessary to execute js code.

? ENGINE: 'heart' of runtime. It contains two things,
~ HEAP: where the objects are stored in the memory. 
~ CALL STACK: where the code is actually executed.  

? JS has only one thread of execution so it does only one thing at a time.

? WEB APIs: APIs provided to the engine. These are not a part of JS itself. fetchAPI, timers, DOM etc... are the examples of it. 

? CALLBACK QUEUE: This contains all the callback functions (coming from events) that are to be executed.

? MICROTASKS QUEUE: This contains all the callbacks that are related to the Promises. It has priority over callback queue. So it's callbacks are executed first if two callbacks are executed at same time.

? EVENT LOOP: Takes callbacks from the callback queue and puts them into callstack so that they can be executed. Event loop makes asynchronous behaviour in JS possible.

? CONCURRENCY MODEL: How the language handles multiple things at the same time.
*/