const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
function check(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) check(file);
    else if (file.endsWith('.js')) {
      const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
      if (result.status !== 0) process.exit(result.status || 1);
    }
  }
}
check('src');
const result = spawnSync(process.execPath, ['--check', 'server.js'], { stdio: 'inherit' });
process.exit(result.status || 0);
