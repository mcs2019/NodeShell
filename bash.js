//Output a prompt
process.stdout.write('prompt > ');

// The sdtin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim(); // remove the newLine

//     process.stdout.write('you typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
// });

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); // remove the newLine
    if(cmd === 'pwd'){
        cmd = process.cwd();
        process.stdout.write(cmd);
        process.stdout.write('\nprompt > ');
    } else {
    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
});
