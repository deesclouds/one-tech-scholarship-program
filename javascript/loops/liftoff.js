/*
NASA's countdown to launch checkpoints(http://www.nasa.gov/mission_pages/shuttle/launch/countdown101.html) where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:
- orbiter transfers from ground to internal power (T-50 seconds)
- ground launch sequencer is go for auto sequence start (T-31 seconds)
- activate launch pad sound suppression system (T-16 seconds)
- activate main engine hydrogen burnoff system (T-10 seconds)
- main engine start (T-6 seconds)
- solid rocket booster ignition and liftoff! (T-0 seconds)

Note: "T-50 seconds" read as "T-minus 50 seconds".

Directions: 
Write a while loop that counts down from 60 seconds and:

- if there's a task being completed, it prints out the task
- if there is no tasks being completed, it prints out the time as T-x seconds

Running Code:
node liftoff.js
*/

let num = 60;
while (num >= 0){
    if(num === 50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(num === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(num === 16){
        console.log("Activate launch pad sound suppression system");
    }else if(num === 10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if(num === 6){
        console.log("Main engine start");
    }else if(num === 0){
            console.log("Solid rocket booster ignition and liftoff!");
    }else{
    console.log("T-" + num + " seconds");
    }
    num = num - 1;
}
/*
Testing Code:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
*/