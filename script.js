document.addEventListener('DOMContentLoaded', function() {
    const xmlFileInput = document.getElementById('xmlFileInput');
    const processButton = document.getElementById('processButton');
    const resultDiv = document.getElementById('result');

    xmlFileInput.addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const xmlContent = event.target.result;
                processXML(xmlContent);
            };
            reader.readAsText(file);
        }
    }

    function processXML(xmlContent) {
        // You can now parse and manipulate the XML content using DOMParser or any other XML parsing library.
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, 'application/xml');

        // Example: Access the XML content
        const rootElement = xmlDoc.documentElement;
        resultDiv.textContent = `Root Element Name: ${rootElement.tagName}`;
    }

    processButton.addEventListener('click', () => {
        // You can perform additional processing when the "Process XML" button is clicked.
    });
});
