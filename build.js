// build js
const fs = require('fs');

// 1. Read config
const config = JSON.parse(fs.readFileSync('config/dev.json'));

// 2. Create HTML
const html = `
<!DOCKTYPE html>
<html>
<head>
	<title>Dev Site</title>
</head>
<body>
	<h1>${config.version}</h1>
</body>
</html>
`;

// 3. Make dist folder if not exists
fs.mkdirSync('dist', { recursive: true});

// 4. Write index.html
fs.writeFileSync('dist/index.html', html);

console.log('Build Complete');
