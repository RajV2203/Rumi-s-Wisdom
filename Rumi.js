let lines = [];
    let currentLine = 0;

    fetch('words.txt')
      .then(response => response.text())
      .then(text => {
        lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

        // lines = text.split('\n');
        // console.log(lines);        

        // lines = text.split('\n').map(line => line.trim());
        // console.log(lines);
        
        // lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        // console.log(lines);

        
        document.getElementById('output').textContent = lines[0] || 'No content found.';

        
      });

    document.addEventListener('click', () => {
      if (lines.length > 0) {
        currentLine = (currentLine + 1) % lines.length;
        document.getElementById('output').textContent = lines[currentLine];
      }
    });