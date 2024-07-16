const core = require('@actions/core');
const child_process = require('child_process');

try {
    const stdout = child_process.execSync('npm run build', {
        stdio: 'pipe',
        encoding: 'utf8'
    });

    core.info(stdout);
} catch (err) {
    if (err.code) {
        core.error(`task failed with error code ${err.code}`);
        core.setFailed(`task failed with error code ${err.code}`);
    } else {
        const { stdout, stderr } = err;
        core.error(`task failed with\nstdout:\n\n${stdout}\n\nstderr:${stderr}`);
        core.setFailed('task failed.');
    }

}
